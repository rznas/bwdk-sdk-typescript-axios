# BusinessAddress

Serializer for BusinessAddress model. Used for merchant and shipping addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**address** | **string** |  | [default to undefined]
**postal_code** | **string** |  | [optional] [default to undefined]
**city_name** | **string** |  | [default to undefined]
**state_name** | **string** |  | [default to undefined]
**district_id** | **number** |  | [optional] [default to undefined]
**district_name** | **string** |  | [optional] [default to undefined]
**longitude** | **string** |  | [optional] [default to undefined]
**latitude** | **string** |  | [optional] [default to undefined]
**building_number** | **string** |  | [optional] [default to undefined]
**unit** | **string** |  | [optional] [default to undefined]
**receiver_name** | **string** |  | [optional] [default to undefined]
**receiver_phone** | **string** |  | [optional] [default to undefined]
**is_accurate** | **boolean** |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**modified_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { BusinessAddress } from './api';

const instance: BusinessAddress = {
    id,
    address,
    postal_code,
    city_name,
    state_name,
    district_id,
    district_name,
    longitude,
    latitude,
    building_number,
    unit,
    receiver_name,
    receiver_phone,
    is_accurate,
    is_active,
    created_at,
    modified_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
