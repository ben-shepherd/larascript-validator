/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRule, IRulesObject } from "./IRule"
import { IValidatorResult } from "./IValidatorResult"

export type CustomValidatorConstructor = {
    new (...args: any[]): IValidator
}

export type ValidatorConstructor = {
    new (rules: IRule[], messages: IValidatorMessages): IValidator
    make(rules: IRule[], messages: IValidatorMessages): IValidator
}

export type IValidatorMessages = Record<string, string>

export type IValidatorAttributes = Record<string, unknown>

export type IValidatorErrors = Record<string, string[]>

export type IValidatorFn = (rules: IRulesObject, messages?: IValidatorMessages) => IValidator

export type IRuleContextCallback = (rule: IRule) => IRule;

export interface IAdditionalRuleContext {
    setApplyRuleContextCallback(callback?: IRuleContextCallback): void
}

export interface IValidator<Attributes extends IValidatorAttributes = IValidatorAttributes> {
    validate(data: Attributes, validator?: IValidator): Promise<IValidatorResult<Attributes>>
    passes(): boolean
    errors(): IValidatorErrors
    validated(): Attributes;
    getRules(): IRulesObject;
    getMessages(): IValidatorMessages;
}



