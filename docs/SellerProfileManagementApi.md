# SellerProfileManagementApi

All URIs are relative to *https://bwdk-backend.digify.shop*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**merchantApiV1AuthStatusRetrieve**](#merchantapiv1authstatusretrieve) | **GET** /merchant/api/v1/auth/status/ | وضعیت لاگین بودن|

# **merchantApiV1AuthStatusRetrieve**
> AuthStatusResponse merchantApiV1AuthStatusRetrieve()

<div dir=\"rtl\" style=\"text-align: right;\">  بررسی وضعیت احراز هویت فروشنده  ## توضیحات  این endpoint برای بررسی اعتبار **API_KEY** فروشنده استفاده می‌شود. اگر کلید معتبر باشد، پاسخ `is_authenticated: true` برمی‌گردد. از این endpoint برای تأیید صحت کلید API قبل از شروع عملیات استفاده کنید.  نیاز به **API_KEY** فروشنده دارد (فقط Header لازم است، بدنه درخواست ندارد).  </div> 

### Example

```typescript
import {
    SellerProfileManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerProfileManagementApi(configuration);

const { status, data } = await apiInstance.merchantApiV1AuthStatusRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AuthStatusResponse**

### Authorization

[MerchantAPIKeyAuth](../README.md#MerchantAPIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

