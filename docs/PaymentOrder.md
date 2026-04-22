# PaymentOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**final_amount** | **number** |  | [readonly] [default to undefined]
**gateway_type** | [**GatewayTypeEnum**](GatewayTypeEnum.md) |  | [readonly] [default to undefined]
**gateway_type_display** | **string** |  | [readonly] [default to undefined]
**paid_at** | **string** |  | [readonly] [default to undefined]
**gateway_name** | **string** |  | [readonly] [default to undefined]
**invoice_id** | **string** |  | [readonly] [default to undefined]
**settlement_date** | **string** |  | [readonly] [default to undefined]
**settlement_status** | **number** |  | [readonly] [default to undefined]
**settlement_status_display** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { PaymentOrder } from './api';

const instance: PaymentOrder = {
    final_amount,
    gateway_type,
    gateway_type_display,
    paid_at,
    gateway_name,
    invoice_id,
    settlement_date,
    settlement_status,
    settlement_status_display,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
