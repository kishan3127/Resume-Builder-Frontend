import { Button } from "antd";
import React from "react";
import { useRouter } from "next/router";

import { Text } from "../../screens/styles";

const ErrorScreen = () => {
  const router = useRouter();

  const reloadThePage = () => {
    router.reload();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text fl="unset" fs="20px" ta="center" mb="20px">
          Something Went Wrong.
        </Text>
        <Button type="primary" danger onClick={reloadThePage.bind(this)}>
          Try Again
        </Button>
      </div>
    </>
  );
};

export default ErrorScreen;
