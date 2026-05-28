//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-risk_categories-SSD_SERVICE_ID_sd_hg93oiE5YnLi6CYX
import { risk_categories as SSD_SERVICE_ID_sd_hg93oiE5YnLi6CYX } from './sd-services/ReelsServices/risk_categories';
//CORE_REFERENCE_IMPORT-required_doc-SSD_SERVICE_ID_sd_TlsrJEODXf8FEOlR
import { required_doc as SSD_SERVICE_ID_sd_TlsrJEODXf8FEOlR } from './sd-services/ReelsServices/required_doc';
//CORE_REFERENCE_IMPORT-loan_tenure-SSD_SERVICE_ID_sd_fMRSO9WgtpSIfgNi
import { loan_tenure as SSD_SERVICE_ID_sd_fMRSO9WgtpSIfgNi } from './sd-services/ReelsServices/loan_tenure';
//CORE_REFERENCE_IMPORT-interest_rate_slabs-SSD_SERVICE_ID_sd_RO6suckLFqFSn75L
import { interest_rate_slabs as SSD_SERVICE_ID_sd_RO6suckLFqFSn75L } from './sd-services/ReelsServices/interest_rate_slabs';
//CORE_REFERENCE_IMPORT-EmpType-SSD_SERVICE_ID_sd_uoPHWWiw5MOnLWbe
import { EmpType as SSD_SERVICE_ID_sd_uoPHWWiw5MOnLWbe } from './sd-services/ReelsServices/EmpType';
//CORE_REFERENCE_IMPORT-loanType-SSD_SERVICE_ID_sd_tdSPiEeKi3g1PbOC
import { loanType as SSD_SERVICE_ID_sd_tdSPiEeKi3g1PbOC } from './sd-services/ReelsServices/loanType';
//CORE_REFERENCE_IMPORT-review_credit_manager-SSD_SERVICE_ID_sd_YYpEzCx9fwcVc5u8
import { review_credit_manager as SSD_SERVICE_ID_sd_YYpEzCx9fwcVc5u8 } from './sd-services/loanService/review_credit_manager';
//CORE_REFERENCE_IMPORT-getloandetails-SSD_SERVICE_ID_sd_2xfPryNX3hKg7HN1
import { getloandetails as SSD_SERVICE_ID_sd_2xfPryNX3hKg7HN1 } from './sd-services/loanService/getloandetails';
//CORE_REFERENCE_IMPORT-review_loan_officer-SSD_SERVICE_ID_sd_G5o1SNg7d1KH50kS
import { review_loan_officer as SSD_SERVICE_ID_sd_G5o1SNg7d1KH50kS } from './sd-services/loanService/review_loan_officer';
//CORE_REFERENCE_IMPORT-getloandetails-SSD_SERVICE_ID_sd_wKA06JfFHJXRWjUA
import { getloandetails as SSD_SERVICE_ID_sd_wKA06JfFHJXRWjUA } from './sd-services/loanService/getloandetails';
//CORE_REFERENCE_IMPORT-mediaController-SSD_SERVICE_ID_sd_tcVkMN53BjepuYrD
import { mediaController as SSD_SERVICE_ID_sd_tcVkMN53BjepuYrD } from './sd-services/loanController/mediaController';
//CORE_REFERENCE_IMPORT-upload_doc-SSD_SERVICE_ID_sd_6z8j4kuFMLlZK9Jn
import { upload_doc as SSD_SERVICE_ID_sd_6z8j4kuFMLlZK9Jn } from './sd-services/loanService/upload_doc';
//CORE_REFERENCE_IMPORT-loanExistController-SSD_SERVICE_ID_sd_OCFPZN0MmWagZypd
import { loanExistController as SSD_SERVICE_ID_sd_OCFPZN0MmWagZypd } from './sd-services/loanController/loanExistController';
//CORE_REFERENCE_IMPORT-create_loan-SSD_SERVICE_ID_sd_KG0qewBWvAr9C52R
import { create_loan as SSD_SERVICE_ID_sd_KG0qewBWvAr9C52R } from './sd-services/loanService/create_loan';
//CORE_REFERENCE_IMPORT-idsutil-sd_3dqpkj044fxfDxYu
import { idsutil as sd_3dqpkj044fxfDxYu } from './sd-services/idsutil';
//CORE_REFERENCE_IMPORT-ids-sd_LRum6OapYNAIawtM
import { ids as sd_LRum6OapYNAIawtM } from './sd-services/ids';
//CORE_REFERENCE_IMPORT-get_users-SSD_SERVICE_ID_sd_cZ8EkC8FEsqDPbuy
import { get_users as SSD_SERVICE_ID_sd_cZ8EkC8FEsqDPbuy } from './sd-services/service/get_users';

export const UserRoutes = [
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-risk_categories-SSD_SERVICE_ID_sd_hg93oiE5YnLi6CYX
SSD_SERVICE_ID_sd_hg93oiE5YnLi6CYX,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-required_doc-SSD_SERVICE_ID_sd_TlsrJEODXf8FEOlR
SSD_SERVICE_ID_sd_TlsrJEODXf8FEOlR,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-loan_tenure-SSD_SERVICE_ID_sd_fMRSO9WgtpSIfgNi
SSD_SERVICE_ID_sd_fMRSO9WgtpSIfgNi,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-interest_rate_slabs-SSD_SERVICE_ID_sd_RO6suckLFqFSn75L
SSD_SERVICE_ID_sd_RO6suckLFqFSn75L,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-EmpType-SSD_SERVICE_ID_sd_uoPHWWiw5MOnLWbe
SSD_SERVICE_ID_sd_uoPHWWiw5MOnLWbe,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-loanType-SSD_SERVICE_ID_sd_tdSPiEeKi3g1PbOC
SSD_SERVICE_ID_sd_tdSPiEeKi3g1PbOC,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-review_credit_manager-SSD_SERVICE_ID_sd_YYpEzCx9fwcVc5u8
SSD_SERVICE_ID_sd_YYpEzCx9fwcVc5u8,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-getloandetails-SSD_SERVICE_ID_sd_2xfPryNX3hKg7HN1
SSD_SERVICE_ID_sd_2xfPryNX3hKg7HN1,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-review_loan_officer-SSD_SERVICE_ID_sd_G5o1SNg7d1KH50kS
SSD_SERVICE_ID_sd_G5o1SNg7d1KH50kS,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-getloandetails-SSD_SERVICE_ID_sd_wKA06JfFHJXRWjUA
SSD_SERVICE_ID_sd_wKA06JfFHJXRWjUA,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-mediaController-SSD_SERVICE_ID_sd_tcVkMN53BjepuYrD
SSD_SERVICE_ID_sd_tcVkMN53BjepuYrD,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-upload_doc-SSD_SERVICE_ID_sd_6z8j4kuFMLlZK9Jn
SSD_SERVICE_ID_sd_6z8j4kuFMLlZK9Jn,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-loanExistController-SSD_SERVICE_ID_sd_OCFPZN0MmWagZypd
SSD_SERVICE_ID_sd_OCFPZN0MmWagZypd,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-create_loan-SSD_SERVICE_ID_sd_KG0qewBWvAr9C52R
SSD_SERVICE_ID_sd_KG0qewBWvAr9C52R,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-idsutil-sd_3dqpkj044fxfDxYu
sd_3dqpkj044fxfDxYu,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-ids-sd_LRum6OapYNAIawtM
sd_LRum6OapYNAIawtM,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-get_users-SSD_SERVICE_ID_sd_cZ8EkC8FEsqDPbuy
SSD_SERVICE_ID_sd_cZ8EkC8FEsqDPbuy,
];
