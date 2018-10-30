import { Component, State, Event, EventEmitter, Method, Prop, Element } from '@stencil/core';
import { FormRouterInterface, FormStateInterface } from '../../common/interfaces';
import { StFormRoute } from '../st-form-route/st-form-route';

@Component({
    tag: 'st-form-router',
    styleUrl: 'st-form-router.css'
})
export class StFormRouter implements FormRouterInterface, FormStateInterface {
    
    @Element() shell: HTMLElement
    @Prop() defaultRoute: string
    @State() currentRoute: StFormRoute
    @State() routeCache: Array<HTMLElement>
    @State() formState: any = {}
    @Event() onFormRouted: EventEmitter

    render() {
        return this.currentRoute && this.renderComponent(this.currentRoute) || ''
    }

    private matchRoute(url: string): StFormRoute {

        let route = this.routeCache.map(a => a as any).filter(c => {
            let n = (c as StFormRoute);
            console.log('n', n, n.route);
            return n.route === url
        })[0];
      
        if (route) {
            let currentRoute = route as StFormRoute;
            currentRoute.formState = this;           
            return route as StFormRoute;
        }

        return null;
    }

    private renderComponent(route: StFormRoute) {

        let params = route.params;
        if (typeof params === 'string') {
            params = JSON.parse(params);
        }

        if (route.renderRoute && typeof route.renderRoute === 'function') {
            return [route.renderRoute({...params})]
        }

        const RouteComponent = route.component;
        let st = {...params, ...this.formState};
        return <RouteComponent router={this as FormRouterInterface} formState={this as FormStateInterface} {...st} />;
    }

    componentDidUpdate() {
        if (this.currentRoute) {
            this.onFormRouted.emit({route: this.currentRoute});
        }
    }

    @Method()
    async route(url, routeFn?: () => HTMLElement): Promise<void> {
        console.log(url);
        if (url && !routeFn) {
            this.currentRoute = this.matchRoute(url)
        }
    }

    @Method()
    async setState(key: string, value: any): Promise<void> {
        this.formState[key] = value;
    }

    @Method()
    async getState(key?: string): Promise<any> {
        let state = typeof key === 'undefined' || key === null ? {...this.formState} : this.formState[key];
        return  Promise.resolve(state);
    }

    @Method()
    async clearState(): Promise<void> {
        this.formState = {};
    }


    componentDidLoad() {
        this.routeCache = Array.from(this.shell.querySelectorAll('st-form-route'));
        if (this.defaultRoute) {
            this.currentRoute = this.matchRoute(this.defaultRoute);
        }
    }

    componentDidUnload() {
        this.routeCache = null;
    }
}
