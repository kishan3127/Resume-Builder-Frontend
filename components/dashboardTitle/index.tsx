import { Form, Input, Button } from "antd";

import Link from "next/link";

import { Text, FlexWrapper } from "../../screens/styles";

const DashboardTitle = ({
  title,
  buttonRequired,
  buttonTitle,
  buttonLink,
}: {
  title: string;
  buttonRequired: boolean;
  buttonTitle?: string;
  buttonLink?: string;
}) => {
  return (
    <FlexWrapper mb="10px" jc="space-between">
      <Text fs="25px" lh="1.3" fl="unset" fw="bold">
        {title}
      </Text>
      {buttonRequired && (
        <div>
          <Button>
            <Link href={buttonLink}>{buttonTitle}</Link>
          </Button>
        </div>
      )}
    </FlexWrapper>
  );
};

export default DashboardTitle;
