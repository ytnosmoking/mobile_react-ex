import React from "react";
import { Icon } from "antd-mobile";

import Loadable from "react-loadable";

const loading = <Icon type="loading" spin></Icon>;
// const loading = () => (
//   <Spin
//     indicator={antIcon}
//     size="large"
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center"
//     }}
//   ></Spin>
// );

export default name => {
  return Loadable({
    loader: () => import(`views/${name}`),
    loading,
    delay: 1000
  });
};

export const LoadComponent = name => {
  return Loadable({
    loader: () => import(`component/${name}`),
    loading,
    delay: 1000
  });
};
