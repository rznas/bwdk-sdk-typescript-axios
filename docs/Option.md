# Option


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type_name** | [**TypeNameEnum**](TypeNameEnum.md) | نوع ویژگی محصول: رنگ، سایز، گارانتی، وزن یا سایر  * &#x60;color&#x60; - رنگ * &#x60;size&#x60; - اندازه * &#x60;warranty&#x60; - گارانتی * &#x60;weight&#x60; - وزن * &#x60;other&#x60; - سایر | [default to undefined]
**name** | **string** | نام ویژگی (مثلاً \&#39;قرمز\&#39; برای رنگ قرمز، \&#39;XL\&#39; برای سایز) | [default to undefined]
**value** | **string** | مقدار ویژگی (مثلاً \&#39;#FF0000\&#39; برای کد رنگ یا مقدار دیگر) | [default to undefined]
**is_color** | **boolean** | اگر نوع ویژگی رنگ است درست است، وگرنه غلط | [optional] [default to false]

## Example

```typescript
import { Option } from './api';

const instance: Option = {
    type_name,
    name,
    value,
    is_color,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
