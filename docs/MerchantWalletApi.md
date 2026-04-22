# MerchantWalletApi

All URIs are relative to *https://bwdk-backend.digify.shop*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**walletsApiV1WalletBalanceRetrieve**](#walletsapiv1walletbalanceretrieve) | **GET** /wallets/api/v1/wallet-balance/ | Get Wallet Balance|

# **walletsApiV1WalletBalanceRetrieve**
> WalletBalance walletsApiV1WalletBalanceRetrieve()

<div dir=\"rtl\" style=\"text-align: right;\">  موجودی کیف پول فروشنده  ## توضیحات  این endpoint موجودی کیف پول فروشنده را برمی‌گرداند. کیف پول برای پرداخت هزینه ارسال دیجی‌اکسپرس استفاده می‌شود. هنگام ثبت مرسوله دیجی‌اکسپرس، هزینه ارسال به‌صورت خودکار از کیف پول کسر می‌شود.  نیاز به **API_KEY** فروشنده دارد.  </div> 

### Example

```typescript
import {
    MerchantWalletApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MerchantWalletApi(configuration);

const { status, data } = await apiInstance.walletsApiV1WalletBalanceRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**WalletBalance**

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

