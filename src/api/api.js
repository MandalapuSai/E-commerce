export const BASE_URL = "http://3.6.40.101:5000";


export const CATEGORY_API = {
    ADD: `${BASE_URL}/category/addCategory`,
    GET_ALL: `${BASE_URL}/category/getallcategories`,
    UPDATE: `${BASE_URL}/category/updatecategory`,
    DELETE: `${BASE_URL}/category/deletecategory`,
  };



// SignApi
export const Admin_Login = BASE_URL + '/admin/adminlogin';

// Coupons
export const COUPONS_API = {
  ADD: `${BASE_URL}/coupons/addCoupon`,
  GET_ALL: `${BASE_URL}/coupons/getallCoupons`,
  UPDATE: `${BASE_URL}/coupons/updateCoupons`,
  DELETE: `${BASE_URL}/coupons/deleteCoupon`,
}


// export const Add_Coupon = BASE_URL + '/coupons/addCoupon';
// export const Get_Coupons = BASE_URL + '/coupons/getallCoupons';
// export const Delete_Coupon = BASE_URL + '/coupons/deleteCoupon';
// export const Update_Coupon = BASE_URL + '/coupons/updateCoupons';