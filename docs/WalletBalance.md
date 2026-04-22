# WalletBalance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Current wallet balance in Tomans | [optional] [default to undefined]
**negative_settlement_deadline** | **string** | Deadline for settling negative balance | [readonly] [default to undefined]

## Example

```typescript
import { WalletBalance } from './api';

const instance: WalletBalance = {
    amount,
    negative_settlement_deadline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
