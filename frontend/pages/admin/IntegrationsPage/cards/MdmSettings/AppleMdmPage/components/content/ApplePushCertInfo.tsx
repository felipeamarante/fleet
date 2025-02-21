import React from "react";

import { IMdmApple } from "interfaces/mdm";

import { readableDate } from "utilities/helpers";

import Button from "components/buttons/Button";
import GitOpsModeTooltipWrapper from "components/GitOpsModeTooltipWrapper";

interface IApplePushCertInfoProps {
  baseClass: string;
  appleAPNInfo: IMdmApple;
  orgName: string;
  serverUrl: string;
  onClickRenew: () => void;
  onClickTurnOff: () => void;
}
const ApplePushCertInfo = ({
  baseClass,
  appleAPNInfo,
  orgName,
  serverUrl,
  onClickRenew,
  onClickTurnOff,
}: IApplePushCertInfoProps) => {
  return (
    <>
      <dl className={`${baseClass}__page-content ${baseClass}__apc-info`}>
        <div>
          <dt>Common name (CN)</dt>
          <dd>{appleAPNInfo.common_name}</dd>
        </div>
        <div>
          <dt>Organization name</dt>
          <dd>{orgName}</dd>
        </div>
        <div>
          <dt>MDM server URL</dt>
          <dd>{serverUrl}</dd>
        </div>
        <div>
          <dt>Renew date</dt>
          <dd>{readableDate(appleAPNInfo.renew_date)}</dd>
        </div>
      </dl>
      <div className={`${baseClass}__apns-button-wrap`}>
        <GitOpsModeTooltipWrapper
          tipOffset={8}
          renderChildren={(disableChildren) => (
            <Button
              variant="inverse"
              onClick={onClickTurnOff}
              disabled={disableChildren}
            >
              Turn off MDM
            </Button>
          )}
        />
        <GitOpsModeTooltipWrapper
          tipOffset={8}
          renderChildren={(disableChildren) => (
            <Button
              className="save-loading"
              variant="brand"
              onClick={onClickRenew}
              disabled={disableChildren}
            >
              Renew certificate
            </Button>
          )}
        />
      </div>
    </>
  );
};

export default ApplePushCertInfo;
