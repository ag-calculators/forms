/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  FormStateInterface,
} from './common/interfaces';


export namespace Components {

  interface StArrowBox {
    'direction': 'left' | 'right';
    'inline': boolean;
  }
  interface StArrowBoxAttributes extends StencilHTMLAttributes {
    'direction'?: 'left' | 'right';
    'inline'?: boolean;
  }

  interface StCheckboxField {
    'description': string;
    'fieldLabel': string;
    'hint': string;
    'id': string;
    'label': string;
    'name': string;
    'required': boolean;
    'value': string;
  }
  interface StCheckboxFieldAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'fieldLabel'?: string;
    'hint'?: string;
    'id'?: string;
    'label'?: string;
    'name'?: string;
    'required'?: boolean;
    'value'?: string;
  }

  interface StCheckbox {
    'bind': (formData: any) => Promise<any>;
    'defaultChecked': boolean;
    'id': string;
    'label': string;
    'name': string;
    'reset': () => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
    'value': string;
  }
  interface StCheckboxAttributes extends StencilHTMLAttributes {
    'defaultChecked'?: boolean;
    'id'?: string;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }

  interface StDatePickerField {
    'defaultDate': Date;
    'description': string;
    'hint': string;
    'label': string;
    'name': string;
    'required': boolean;
  }
  interface StDatePickerFieldAttributes extends StencilHTMLAttributes {
    'defaultDate'?: Date;
    'description'?: string;
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'required'?: boolean;
  }

  interface StDatePicker {
    'bind': (formData: any) => Promise<any>;
    'bordered': boolean;
    'defaultDate': Date;
    'name': string;
    'onValidate': (valid, msg) => void;
    'required': boolean;
    'reset': () => Promise<void>;
    'setDate': (newDate: Date) => void;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
  }
  interface StDatePickerAttributes extends StencilHTMLAttributes {
    'bordered'?: boolean;
    'defaultDate'?: Date;
    'name'?: string;
    'onValidate'?: (valid, msg) => void;
    'required'?: boolean;
  }

  interface StDrilldownItemControl {}
  interface StDrilldownItemControlAttributes extends StencilHTMLAttributes {}

  interface StDrilldownItem {
    'icon': string;
    'path': string;
    'smallText': boolean;
    'text': string;
    'value': any;
  }
  interface StDrilldownItemAttributes extends StencilHTMLAttributes {
    'icon'?: string;
    'path'?: string;
    'smallText'?: boolean;
    'text'?: string;
    'value'?: any;
  }

  interface StDrilldown {
    'bind': (formData: any) => Promise<any>;
    'description': string;
    'hint': string;
    'id': string;
    'itemSelected': (str) => void;
    'label': string;
    'name': string;
    'path': string;
    'required': boolean;
    'reset': () => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
  }
  interface StDrilldownAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'hint'?: string;
    'id'?: string;
    'itemSelected'?: (str) => void;
    'label'?: string;
    'name'?: string;
    'path'?: string;
    'required'?: boolean;
  }

  interface StEditableContent {
    'maxNumber': number;
    'minNumber': number;
    'numbersOnly': boolean;
    'onEdit': (content) => void;
  }
  interface StEditableContentAttributes extends StencilHTMLAttributes {
    'maxNumber'?: number;
    'minNumber'?: number;
    'numbersOnly'?: boolean;
    'onEdit'?: (content) => void;
  }

  interface StFormAction {
    'action': string;
    'actionDetail': any;
    'actionText': string;
    'disabled': boolean;
    'flex': boolean;
    'iconPosition': 'left' | 'right';
    'iconText': string;
    'renderIcon': () => void;
    'responsive': boolean;
  }
  interface StFormActionAttributes extends StencilHTMLAttributes {
    'action'?: string;
    'actionDetail'?: any;
    'actionText'?: string;
    'disabled'?: boolean;
    'flex'?: boolean;
    'iconPosition'?: 'left' | 'right';
    'iconText'?: string;
    'onActionRequested'?: (event: CustomEvent) => void;
    'renderIcon'?: () => void;
    'responsive'?: boolean;
  }

  interface StFormActions {}
  interface StFormActionsAttributes extends StencilHTMLAttributes {}

  interface StFormFieldDescription {}
  interface StFormFieldDescriptionAttributes extends StencilHTMLAttributes {}

  interface StFormFieldHint {}
  interface StFormFieldHintAttributes extends StencilHTMLAttributes {}

  interface StFormFieldLabel {
    'block': boolean;
    'htmlFor': string;
  }
  interface StFormFieldLabelAttributes extends StencilHTMLAttributes {
    'block'?: boolean;
    'htmlFor'?: string;
  }

  interface StFormFieldValidationMessage {
    'validationMessage': string;
  }
  interface StFormFieldValidationMessageAttributes extends StencilHTMLAttributes {
    'validationMessage'?: string;
  }

  interface StFormField {
    'description': string;
    'hint': string;
    'isValid': boolean;
    'label': string;
    'name': string;
    'validationMessage': string;
  }
  interface StFormFieldAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'hint'?: string;
    'isValid'?: boolean;
    'label'?: string;
    'name'?: string;
    'validationMessage'?: string;
  }

  interface StFormHeader {
    'title': string;
  }
  interface StFormHeaderAttributes extends StencilHTMLAttributes {
    'title'?: string;
  }

  interface StFormOptionsRow {}
  interface StFormOptionsRowAttributes extends StencilHTMLAttributes {}

  interface StFormPadding {
    'pad': string;
  }
  interface StFormPaddingAttributes extends StencilHTMLAttributes {
    'pad'?: string;
  }

  interface StFormRoute {
    'component': string;
    'formState': FormStateInterface;
    'params': any;
    'renderRoute': (params: any) => any;
    'route': string;
  }
  interface StFormRouteAttributes extends StencilHTMLAttributes {
    'component'?: string;
    'formState'?: FormStateInterface;
    'params'?: any;
    'renderRoute'?: (params: any) => any;
    'route'?: string;
  }

  interface StFormRouter {
    'clearState': () => Promise<void>;
    'defaultRoute': string;
    'getState': (key?: string) => Promise<any>;
    'route': (url: any, routeFn?: () => HTMLElement) => Promise<void>;
    'setState': (key: string, value: any) => Promise<void>;
  }
  interface StFormRouterAttributes extends StencilHTMLAttributes {
    'defaultRoute'?: string;
    'onOnFormRouted'?: (event: CustomEvent) => void;
  }

  interface StFormRow {}
  interface StFormRowAttributes extends StencilHTMLAttributes {}

  interface StForm {
    'action': string;
    'errorClass': string;
    'method': 'get' | 'post' | 'GET' | 'POST';
    'name': string;
    'novalidate': boolean;
    'onFormSubmit': (values: any) => void;
  }
  interface StFormAttributes extends StencilHTMLAttributes {
    'action'?: string;
    'errorClass'?: string;
    'method'?: 'get' | 'post' | 'GET' | 'POST';
    'name'?: string;
    'novalidate'?: boolean;
    'onFormSubmit'?: (values: any) => void;
    'onStFormSubmitted'?: (event: CustomEvent) => void;
  }

  interface StGridSelect {
    'bordered': boolean;
    'items': Array<HTMLElement>;
    'maxColumns': number;
  }
  interface StGridSelectAttributes extends StencilHTMLAttributes {
    'bordered'?: boolean;
    'items'?: Array<HTMLElement>;
    'maxColumns'?: number;
  }

  interface StIconArrowBox {
    'boxBorderColor': string;
    'direction': 'left' | 'right';
    'greyscale': boolean;
    'icon': string;
    'iconBackgroundColor': string;
    'iconColor': string;
    'iconFontSize': string;
    'iconSize': string;
    'inline': boolean;
  }
  interface StIconArrowBoxAttributes extends StencilHTMLAttributes {
    'boxBorderColor'?: string;
    'direction'?: 'left' | 'right';
    'greyscale'?: boolean;
    'icon'?: string;
    'iconBackgroundColor'?: string;
    'iconColor'?: string;
    'iconFontSize'?: string;
    'iconSize'?: string;
    'inline'?: boolean;
  }

  interface StInputAppend {
    'icon': string;
  }
  interface StInputAppendAttributes extends StencilHTMLAttributes {
    'icon'?: string;
  }

  interface StModalDialog {
    'close': () => void;
    'isOpen': boolean;
    'show': () => void;
  }
  interface StModalDialogAttributes extends StencilHTMLAttributes {
    'isOpen'?: boolean;
  }

  interface StMonthPicker {
    'label': string;
    'name': string;
    'required': boolean;
  }
  interface StMonthPickerAttributes extends StencilHTMLAttributes {
    'label'?: string;
    'name'?: string;
    'required'?: boolean;
  }

  interface StNumberInput {
    'bind': (formData: any) => Promise<any>;
    'defaultValue': number;
    'description': string;
    'focused': boolean;
    'hint': string;
    'label': string;
    'max': number;
    'min': number;
    'name': string;
    'pattern': string;
    'placeholder': string;
    'required': boolean;
    'reset': () => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'step': number;
    'validate': () => Promise<boolean>;
  }
  interface StNumberInputAttributes extends StencilHTMLAttributes {
    'defaultValue'?: number;
    'description'?: string;
    'focused'?: boolean;
    'hint'?: string;
    'label'?: string;
    'max'?: number;
    'min'?: number;
    'name'?: string;
    'pattern'?: string;
    'placeholder'?: string;
    'required'?: boolean;
    'step'?: number;
  }

  interface StNumberPicker {
    'bind': (formData: any) => Promise<any>;
    'defaultValue': number;
    'description': string;
    'hint': string;
    'id': string;
    'label': string;
    'name': string;
    'numbers': any;
    'required': boolean;
    'reset': () => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'step': number;
    'validate': () => Promise<boolean>;
  }
  interface StNumberPickerAttributes extends StencilHTMLAttributes {
    'defaultValue'?: number;
    'description'?: string;
    'hint'?: string;
    'id'?: string;
    'label'?: string;
    'name'?: string;
    'numbers'?: any;
    'required'?: boolean;
    'step'?: number;
  }

  interface StNumberSlider {
    'bind': (formData: any) => Promise<any>;
    'bordered': boolean;
    'defaultValue': number;
    'items': string;
    'labels': Array<string>;
    'max': number;
    'min': number;
    'name': string;
    'renderLeftAction': (items) => void;
    'reset': () => Promise<void>;
    'selectIndex': (idx: number) => Promise<void>;
    'selectedValue': () => number;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
    'valueChanged': (val) => void;
    'visibleItems': number;
  }
  interface StNumberSliderAttributes extends StencilHTMLAttributes {
    'bordered'?: boolean;
    'defaultValue'?: number;
    'items'?: string;
    'labels'?: Array<string>;
    'max'?: number;
    'min'?: number;
    'name'?: string;
    'renderLeftAction'?: (items) => void;
    'valueChanged'?: (val) => void;
    'visibleItems'?: number;
  }

  interface StNumberStepperField {
    'defaultValue': number;
    'description': string;
    'hint': string;
    'label': string;
    'max': number;
    'min': number;
    'name': string;
    'step': number;
  }
  interface StNumberStepperFieldAttributes extends StencilHTMLAttributes {
    'defaultValue'?: number;
    'description'?: string;
    'hint'?: string;
    'label'?: string;
    'max'?: number;
    'min'?: number;
    'name'?: string;
    'step'?: number;
  }

  interface StNumberStepper {
    'bind': (formData: any) => Promise<any>;
    'bordered': boolean;
    'defaultValue': number;
    'max': number;
    'min': number;
    'name': string;
    'reset': () => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'step': number;
    'validate': () => Promise<boolean>;
  }
  interface StNumberStepperAttributes extends StencilHTMLAttributes {
    'bordered'?: boolean;
    'defaultValue'?: number;
    'max'?: number;
    'min'?: number;
    'name'?: string;
    'step'?: number;
  }

  interface StRadioButtonGroup {
    'description': string;
    'hint': string;
    'label': string;
    'layout': 'inline' | 'stacked' | 'grid';
  }
  interface StRadioButtonGroupAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'hint'?: string;
    'label'?: string;
    'layout'?: 'inline' | 'stacked' | 'grid';
  }

  interface StRadioButton {
    'backgroundColor': string;
    'bind': (formData: any) => Promise<any>;
    'checkedBackgroundColor': string;
    'color': string;
    'defaultChecked': boolean;
    'id': string;
    'label': string;
    'name': string;
    'required': boolean;
    'reset': () => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
    'value': string;
  }
  interface StRadioButtonAttributes extends StencilHTMLAttributes {
    'backgroundColor'?: string;
    'checkedBackgroundColor'?: string;
    'color'?: string;
    'defaultChecked'?: boolean;
    'id'?: string;
    'label'?: string;
    'name'?: string;
    'required'?: boolean;
    'value'?: string;
  }

  interface StRadioGroup {
    'description': string;
    'hint': string;
    'label': string;
  }
  interface StRadioGroupAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'hint'?: string;
    'label'?: string;
  }

  interface StRadio {
    'bind': (formData: any) => Promise<any>;
    'defaultChecked': boolean;
    'id': string;
    'label': string;
    'name': string;
    'reset': () => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
    'value': string;
  }
  interface StRadioAttributes extends StencilHTMLAttributes {
    'defaultChecked'?: boolean;
    'id'?: string;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }

  interface StRangeInput {
    'bind': (formData: any) => Promise<any>;
    'id': string;
    'label': string;
    'max': number;
    'min': number;
    'name': string;
    'required': boolean;
    'reset': () => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
    'value': number;
  }
  interface StRangeInputAttributes extends StencilHTMLAttributes {
    'id'?: string;
    'label'?: string;
    'max'?: number;
    'min'?: number;
    'name'?: string;
    'required'?: boolean;
    'value'?: number;
  }

  interface StSelect {
    'bind': (formData: any) => Promise<any>;
    'description': string;
    'hint': string;
    'label': string;
    'name': string;
    'required': boolean;
    'reset': (detail: any) => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
  }
  interface StSelectAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'required'?: boolean;
  }

  interface StStepProgress {
    'currentStep': number;
    'id': string;
    'label': string;
    'setStep': (index: number, label: string) => void;
    'steps': number;
  }
  interface StStepProgressAttributes extends StencilHTMLAttributes {
    'currentStep'?: number;
    'id'?: string;
    'label'?: string;
    'onStProgressStepChanged'?: (event: CustomEvent) => void;
    'steps'?: number;
  }

  interface StTextInput {
    'bind': (formData: any) => Promise<any>;
    'defaultValue': string;
    'description': string;
    'focused': boolean;
    'hint': string;
    'label': string;
    'name': string;
    'onInputChange': (val) => void;
    'pattern': string;
    'placeholder': string;
    'required': boolean;
    'reset': (detail: any) => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
  }
  interface StTextInputAttributes extends StencilHTMLAttributes {
    'defaultValue'?: string;
    'description'?: string;
    'focused'?: boolean;
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'onInputChange'?: (val) => void;
    'pattern'?: string;
    'placeholder'?: string;
    'required'?: boolean;
  }

  interface StTextarea {
    'bind': (formData: any) => Promise<any>;
    'description': string;
    'hint': string;
    'label': string;
    'name': string;
    'pattern': string;
    'required': boolean;
    'reset': (detail: any) => Promise<void>;
    'setValue': (value: any) => Promise<void>;
    'validate': () => Promise<boolean>;
  }
  interface StTextareaAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'pattern'?: string;
    'required'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'StArrowBox': Components.StArrowBox;
    'StCheckboxField': Components.StCheckboxField;
    'StCheckbox': Components.StCheckbox;
    'StDatePickerField': Components.StDatePickerField;
    'StDatePicker': Components.StDatePicker;
    'StDrilldownItemControl': Components.StDrilldownItemControl;
    'StDrilldownItem': Components.StDrilldownItem;
    'StDrilldown': Components.StDrilldown;
    'StEditableContent': Components.StEditableContent;
    'StFormAction': Components.StFormAction;
    'StFormActions': Components.StFormActions;
    'StFormFieldDescription': Components.StFormFieldDescription;
    'StFormFieldHint': Components.StFormFieldHint;
    'StFormFieldLabel': Components.StFormFieldLabel;
    'StFormFieldValidationMessage': Components.StFormFieldValidationMessage;
    'StFormField': Components.StFormField;
    'StFormHeader': Components.StFormHeader;
    'StFormOptionsRow': Components.StFormOptionsRow;
    'StFormPadding': Components.StFormPadding;
    'StFormRoute': Components.StFormRoute;
    'StFormRouter': Components.StFormRouter;
    'StFormRow': Components.StFormRow;
    'StForm': Components.StForm;
    'StGridSelect': Components.StGridSelect;
    'StIconArrowBox': Components.StIconArrowBox;
    'StInputAppend': Components.StInputAppend;
    'StModalDialog': Components.StModalDialog;
    'StMonthPicker': Components.StMonthPicker;
    'StNumberInput': Components.StNumberInput;
    'StNumberPicker': Components.StNumberPicker;
    'StNumberSlider': Components.StNumberSlider;
    'StNumberStepperField': Components.StNumberStepperField;
    'StNumberStepper': Components.StNumberStepper;
    'StRadioButtonGroup': Components.StRadioButtonGroup;
    'StRadioButton': Components.StRadioButton;
    'StRadioGroup': Components.StRadioGroup;
    'StRadio': Components.StRadio;
    'StRangeInput': Components.StRangeInput;
    'StSelect': Components.StSelect;
    'StStepProgress': Components.StStepProgress;
    'StTextInput': Components.StTextInput;
    'StTextarea': Components.StTextarea;
  }

  interface StencilIntrinsicElements {
    'st-arrow-box': Components.StArrowBoxAttributes;
    'st-checkbox-field': Components.StCheckboxFieldAttributes;
    'st-checkbox': Components.StCheckboxAttributes;
    'st-date-picker-field': Components.StDatePickerFieldAttributes;
    'st-date-picker': Components.StDatePickerAttributes;
    'st-drilldown-item-control': Components.StDrilldownItemControlAttributes;
    'st-drilldown-item': Components.StDrilldownItemAttributes;
    'st-drilldown': Components.StDrilldownAttributes;
    'st-editable-content': Components.StEditableContentAttributes;
    'st-form-action': Components.StFormActionAttributes;
    'st-form-actions': Components.StFormActionsAttributes;
    'st-form-field-description': Components.StFormFieldDescriptionAttributes;
    'st-form-field-hint': Components.StFormFieldHintAttributes;
    'st-form-field-label': Components.StFormFieldLabelAttributes;
    'st-form-field-validation-message': Components.StFormFieldValidationMessageAttributes;
    'st-form-field': Components.StFormFieldAttributes;
    'st-form-header': Components.StFormHeaderAttributes;
    'st-form-options-row': Components.StFormOptionsRowAttributes;
    'st-form-padding': Components.StFormPaddingAttributes;
    'st-form-route': Components.StFormRouteAttributes;
    'st-form-router': Components.StFormRouterAttributes;
    'st-form-row': Components.StFormRowAttributes;
    'st-form': Components.StFormAttributes;
    'st-grid-select': Components.StGridSelectAttributes;
    'st-icon-arrow-box': Components.StIconArrowBoxAttributes;
    'st-input-append': Components.StInputAppendAttributes;
    'st-modal-dialog': Components.StModalDialogAttributes;
    'st-month-picker': Components.StMonthPickerAttributes;
    'st-number-input': Components.StNumberInputAttributes;
    'st-number-picker': Components.StNumberPickerAttributes;
    'st-number-slider': Components.StNumberSliderAttributes;
    'st-number-stepper-field': Components.StNumberStepperFieldAttributes;
    'st-number-stepper': Components.StNumberStepperAttributes;
    'st-radio-button-group': Components.StRadioButtonGroupAttributes;
    'st-radio-button': Components.StRadioButtonAttributes;
    'st-radio-group': Components.StRadioGroupAttributes;
    'st-radio': Components.StRadioAttributes;
    'st-range-input': Components.StRangeInputAttributes;
    'st-select': Components.StSelectAttributes;
    'st-step-progress': Components.StStepProgressAttributes;
    'st-text-input': Components.StTextInputAttributes;
    'st-textarea': Components.StTextareaAttributes;
  }


  interface HTMLStArrowBoxElement extends Components.StArrowBox, HTMLStencilElement {}
  var HTMLStArrowBoxElement: {
    prototype: HTMLStArrowBoxElement;
    new (): HTMLStArrowBoxElement;
  };

  interface HTMLStCheckboxFieldElement extends Components.StCheckboxField, HTMLStencilElement {}
  var HTMLStCheckboxFieldElement: {
    prototype: HTMLStCheckboxFieldElement;
    new (): HTMLStCheckboxFieldElement;
  };

  interface HTMLStCheckboxElement extends Components.StCheckbox, HTMLStencilElement {}
  var HTMLStCheckboxElement: {
    prototype: HTMLStCheckboxElement;
    new (): HTMLStCheckboxElement;
  };

  interface HTMLStDatePickerFieldElement extends Components.StDatePickerField, HTMLStencilElement {}
  var HTMLStDatePickerFieldElement: {
    prototype: HTMLStDatePickerFieldElement;
    new (): HTMLStDatePickerFieldElement;
  };

  interface HTMLStDatePickerElement extends Components.StDatePicker, HTMLStencilElement {}
  var HTMLStDatePickerElement: {
    prototype: HTMLStDatePickerElement;
    new (): HTMLStDatePickerElement;
  };

  interface HTMLStDrilldownItemControlElement extends Components.StDrilldownItemControl, HTMLStencilElement {}
  var HTMLStDrilldownItemControlElement: {
    prototype: HTMLStDrilldownItemControlElement;
    new (): HTMLStDrilldownItemControlElement;
  };

  interface HTMLStDrilldownItemElement extends Components.StDrilldownItem, HTMLStencilElement {}
  var HTMLStDrilldownItemElement: {
    prototype: HTMLStDrilldownItemElement;
    new (): HTMLStDrilldownItemElement;
  };

  interface HTMLStDrilldownElement extends Components.StDrilldown, HTMLStencilElement {}
  var HTMLStDrilldownElement: {
    prototype: HTMLStDrilldownElement;
    new (): HTMLStDrilldownElement;
  };

  interface HTMLStEditableContentElement extends Components.StEditableContent, HTMLStencilElement {}
  var HTMLStEditableContentElement: {
    prototype: HTMLStEditableContentElement;
    new (): HTMLStEditableContentElement;
  };

  interface HTMLStFormActionElement extends Components.StFormAction, HTMLStencilElement {}
  var HTMLStFormActionElement: {
    prototype: HTMLStFormActionElement;
    new (): HTMLStFormActionElement;
  };

  interface HTMLStFormActionsElement extends Components.StFormActions, HTMLStencilElement {}
  var HTMLStFormActionsElement: {
    prototype: HTMLStFormActionsElement;
    new (): HTMLStFormActionsElement;
  };

  interface HTMLStFormFieldDescriptionElement extends Components.StFormFieldDescription, HTMLStencilElement {}
  var HTMLStFormFieldDescriptionElement: {
    prototype: HTMLStFormFieldDescriptionElement;
    new (): HTMLStFormFieldDescriptionElement;
  };

  interface HTMLStFormFieldHintElement extends Components.StFormFieldHint, HTMLStencilElement {}
  var HTMLStFormFieldHintElement: {
    prototype: HTMLStFormFieldHintElement;
    new (): HTMLStFormFieldHintElement;
  };

  interface HTMLStFormFieldLabelElement extends Components.StFormFieldLabel, HTMLStencilElement {}
  var HTMLStFormFieldLabelElement: {
    prototype: HTMLStFormFieldLabelElement;
    new (): HTMLStFormFieldLabelElement;
  };

  interface HTMLStFormFieldValidationMessageElement extends Components.StFormFieldValidationMessage, HTMLStencilElement {}
  var HTMLStFormFieldValidationMessageElement: {
    prototype: HTMLStFormFieldValidationMessageElement;
    new (): HTMLStFormFieldValidationMessageElement;
  };

  interface HTMLStFormFieldElement extends Components.StFormField, HTMLStencilElement {}
  var HTMLStFormFieldElement: {
    prototype: HTMLStFormFieldElement;
    new (): HTMLStFormFieldElement;
  };

  interface HTMLStFormHeaderElement extends Components.StFormHeader, HTMLStencilElement {}
  var HTMLStFormHeaderElement: {
    prototype: HTMLStFormHeaderElement;
    new (): HTMLStFormHeaderElement;
  };

  interface HTMLStFormOptionsRowElement extends Components.StFormOptionsRow, HTMLStencilElement {}
  var HTMLStFormOptionsRowElement: {
    prototype: HTMLStFormOptionsRowElement;
    new (): HTMLStFormOptionsRowElement;
  };

  interface HTMLStFormPaddingElement extends Components.StFormPadding, HTMLStencilElement {}
  var HTMLStFormPaddingElement: {
    prototype: HTMLStFormPaddingElement;
    new (): HTMLStFormPaddingElement;
  };

  interface HTMLStFormRouteElement extends Components.StFormRoute, HTMLStencilElement {}
  var HTMLStFormRouteElement: {
    prototype: HTMLStFormRouteElement;
    new (): HTMLStFormRouteElement;
  };

  interface HTMLStFormRouterElement extends Components.StFormRouter, HTMLStencilElement {}
  var HTMLStFormRouterElement: {
    prototype: HTMLStFormRouterElement;
    new (): HTMLStFormRouterElement;
  };

  interface HTMLStFormRowElement extends Components.StFormRow, HTMLStencilElement {}
  var HTMLStFormRowElement: {
    prototype: HTMLStFormRowElement;
    new (): HTMLStFormRowElement;
  };

  interface HTMLStFormElement extends Components.StForm, HTMLStencilElement {}
  var HTMLStFormElement: {
    prototype: HTMLStFormElement;
    new (): HTMLStFormElement;
  };

  interface HTMLStGridSelectElement extends Components.StGridSelect, HTMLStencilElement {}
  var HTMLStGridSelectElement: {
    prototype: HTMLStGridSelectElement;
    new (): HTMLStGridSelectElement;
  };

  interface HTMLStIconArrowBoxElement extends Components.StIconArrowBox, HTMLStencilElement {}
  var HTMLStIconArrowBoxElement: {
    prototype: HTMLStIconArrowBoxElement;
    new (): HTMLStIconArrowBoxElement;
  };

  interface HTMLStInputAppendElement extends Components.StInputAppend, HTMLStencilElement {}
  var HTMLStInputAppendElement: {
    prototype: HTMLStInputAppendElement;
    new (): HTMLStInputAppendElement;
  };

  interface HTMLStModalDialogElement extends Components.StModalDialog, HTMLStencilElement {}
  var HTMLStModalDialogElement: {
    prototype: HTMLStModalDialogElement;
    new (): HTMLStModalDialogElement;
  };

  interface HTMLStMonthPickerElement extends Components.StMonthPicker, HTMLStencilElement {}
  var HTMLStMonthPickerElement: {
    prototype: HTMLStMonthPickerElement;
    new (): HTMLStMonthPickerElement;
  };

  interface HTMLStNumberInputElement extends Components.StNumberInput, HTMLStencilElement {}
  var HTMLStNumberInputElement: {
    prototype: HTMLStNumberInputElement;
    new (): HTMLStNumberInputElement;
  };

  interface HTMLStNumberPickerElement extends Components.StNumberPicker, HTMLStencilElement {}
  var HTMLStNumberPickerElement: {
    prototype: HTMLStNumberPickerElement;
    new (): HTMLStNumberPickerElement;
  };

  interface HTMLStNumberSliderElement extends Components.StNumberSlider, HTMLStencilElement {}
  var HTMLStNumberSliderElement: {
    prototype: HTMLStNumberSliderElement;
    new (): HTMLStNumberSliderElement;
  };

  interface HTMLStNumberStepperFieldElement extends Components.StNumberStepperField, HTMLStencilElement {}
  var HTMLStNumberStepperFieldElement: {
    prototype: HTMLStNumberStepperFieldElement;
    new (): HTMLStNumberStepperFieldElement;
  };

  interface HTMLStNumberStepperElement extends Components.StNumberStepper, HTMLStencilElement {}
  var HTMLStNumberStepperElement: {
    prototype: HTMLStNumberStepperElement;
    new (): HTMLStNumberStepperElement;
  };

  interface HTMLStRadioButtonGroupElement extends Components.StRadioButtonGroup, HTMLStencilElement {}
  var HTMLStRadioButtonGroupElement: {
    prototype: HTMLStRadioButtonGroupElement;
    new (): HTMLStRadioButtonGroupElement;
  };

  interface HTMLStRadioButtonElement extends Components.StRadioButton, HTMLStencilElement {}
  var HTMLStRadioButtonElement: {
    prototype: HTMLStRadioButtonElement;
    new (): HTMLStRadioButtonElement;
  };

  interface HTMLStRadioGroupElement extends Components.StRadioGroup, HTMLStencilElement {}
  var HTMLStRadioGroupElement: {
    prototype: HTMLStRadioGroupElement;
    new (): HTMLStRadioGroupElement;
  };

  interface HTMLStRadioElement extends Components.StRadio, HTMLStencilElement {}
  var HTMLStRadioElement: {
    prototype: HTMLStRadioElement;
    new (): HTMLStRadioElement;
  };

  interface HTMLStRangeInputElement extends Components.StRangeInput, HTMLStencilElement {}
  var HTMLStRangeInputElement: {
    prototype: HTMLStRangeInputElement;
    new (): HTMLStRangeInputElement;
  };

  interface HTMLStSelectElement extends Components.StSelect, HTMLStencilElement {}
  var HTMLStSelectElement: {
    prototype: HTMLStSelectElement;
    new (): HTMLStSelectElement;
  };

  interface HTMLStStepProgressElement extends Components.StStepProgress, HTMLStencilElement {}
  var HTMLStStepProgressElement: {
    prototype: HTMLStStepProgressElement;
    new (): HTMLStStepProgressElement;
  };

  interface HTMLStTextInputElement extends Components.StTextInput, HTMLStencilElement {}
  var HTMLStTextInputElement: {
    prototype: HTMLStTextInputElement;
    new (): HTMLStTextInputElement;
  };

  interface HTMLStTextareaElement extends Components.StTextarea, HTMLStencilElement {}
  var HTMLStTextareaElement: {
    prototype: HTMLStTextareaElement;
    new (): HTMLStTextareaElement;
  };

  interface HTMLElementTagNameMap {
    'st-arrow-box': HTMLStArrowBoxElement
    'st-checkbox-field': HTMLStCheckboxFieldElement
    'st-checkbox': HTMLStCheckboxElement
    'st-date-picker-field': HTMLStDatePickerFieldElement
    'st-date-picker': HTMLStDatePickerElement
    'st-drilldown-item-control': HTMLStDrilldownItemControlElement
    'st-drilldown-item': HTMLStDrilldownItemElement
    'st-drilldown': HTMLStDrilldownElement
    'st-editable-content': HTMLStEditableContentElement
    'st-form-action': HTMLStFormActionElement
    'st-form-actions': HTMLStFormActionsElement
    'st-form-field-description': HTMLStFormFieldDescriptionElement
    'st-form-field-hint': HTMLStFormFieldHintElement
    'st-form-field-label': HTMLStFormFieldLabelElement
    'st-form-field-validation-message': HTMLStFormFieldValidationMessageElement
    'st-form-field': HTMLStFormFieldElement
    'st-form-header': HTMLStFormHeaderElement
    'st-form-options-row': HTMLStFormOptionsRowElement
    'st-form-padding': HTMLStFormPaddingElement
    'st-form-route': HTMLStFormRouteElement
    'st-form-router': HTMLStFormRouterElement
    'st-form-row': HTMLStFormRowElement
    'st-form': HTMLStFormElement
    'st-grid-select': HTMLStGridSelectElement
    'st-icon-arrow-box': HTMLStIconArrowBoxElement
    'st-input-append': HTMLStInputAppendElement
    'st-modal-dialog': HTMLStModalDialogElement
    'st-month-picker': HTMLStMonthPickerElement
    'st-number-input': HTMLStNumberInputElement
    'st-number-picker': HTMLStNumberPickerElement
    'st-number-slider': HTMLStNumberSliderElement
    'st-number-stepper-field': HTMLStNumberStepperFieldElement
    'st-number-stepper': HTMLStNumberStepperElement
    'st-radio-button-group': HTMLStRadioButtonGroupElement
    'st-radio-button': HTMLStRadioButtonElement
    'st-radio-group': HTMLStRadioGroupElement
    'st-radio': HTMLStRadioElement
    'st-range-input': HTMLStRangeInputElement
    'st-select': HTMLStSelectElement
    'st-step-progress': HTMLStStepProgressElement
    'st-text-input': HTMLStTextInputElement
    'st-textarea': HTMLStTextareaElement
  }

  interface ElementTagNameMap {
    'st-arrow-box': HTMLStArrowBoxElement;
    'st-checkbox-field': HTMLStCheckboxFieldElement;
    'st-checkbox': HTMLStCheckboxElement;
    'st-date-picker-field': HTMLStDatePickerFieldElement;
    'st-date-picker': HTMLStDatePickerElement;
    'st-drilldown-item-control': HTMLStDrilldownItemControlElement;
    'st-drilldown-item': HTMLStDrilldownItemElement;
    'st-drilldown': HTMLStDrilldownElement;
    'st-editable-content': HTMLStEditableContentElement;
    'st-form-action': HTMLStFormActionElement;
    'st-form-actions': HTMLStFormActionsElement;
    'st-form-field-description': HTMLStFormFieldDescriptionElement;
    'st-form-field-hint': HTMLStFormFieldHintElement;
    'st-form-field-label': HTMLStFormFieldLabelElement;
    'st-form-field-validation-message': HTMLStFormFieldValidationMessageElement;
    'st-form-field': HTMLStFormFieldElement;
    'st-form-header': HTMLStFormHeaderElement;
    'st-form-options-row': HTMLStFormOptionsRowElement;
    'st-form-padding': HTMLStFormPaddingElement;
    'st-form-route': HTMLStFormRouteElement;
    'st-form-router': HTMLStFormRouterElement;
    'st-form-row': HTMLStFormRowElement;
    'st-form': HTMLStFormElement;
    'st-grid-select': HTMLStGridSelectElement;
    'st-icon-arrow-box': HTMLStIconArrowBoxElement;
    'st-input-append': HTMLStInputAppendElement;
    'st-modal-dialog': HTMLStModalDialogElement;
    'st-month-picker': HTMLStMonthPickerElement;
    'st-number-input': HTMLStNumberInputElement;
    'st-number-picker': HTMLStNumberPickerElement;
    'st-number-slider': HTMLStNumberSliderElement;
    'st-number-stepper-field': HTMLStNumberStepperFieldElement;
    'st-number-stepper': HTMLStNumberStepperElement;
    'st-radio-button-group': HTMLStRadioButtonGroupElement;
    'st-radio-button': HTMLStRadioButtonElement;
    'st-radio-group': HTMLStRadioGroupElement;
    'st-radio': HTMLStRadioElement;
    'st-range-input': HTMLStRangeInputElement;
    'st-select': HTMLStSelectElement;
    'st-step-progress': HTMLStStepProgressElement;
    'st-text-input': HTMLStTextInputElement;
    'st-textarea': HTMLStTextareaElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
