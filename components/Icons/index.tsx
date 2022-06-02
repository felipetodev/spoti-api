import React from "react";
import { Stack } from "@chakra-ui/react";

export const ArrowIcon: React.FC<any> = (props) => (
  <svg
    {...props}
    fill="#fff"
    role="img"
    height="24"
    width="24"
    viewBox="0 0 24 24"
  >
    <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z" />
  </svg>
);

export const UserWidgetNameIcon: React.FC<any> = (props) => (
  <svg
    {...props}
    fill="#fff"
    role="img"
    height="16"
    width="16"
    viewBox="0 0 16 16"
  >
    <path d="M14 6l-6 6-6-6h12z"></path>
  </svg>
);

export const VerifiedIcon: React.FC<any> = (props) => (
  <Stack
    as="svg"
    role="img"
    height="24px"
    width="24px"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M10.814.5a1.658 1.658 0 012.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 011.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 01-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 01-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 01-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 010-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 011.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 00-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 00-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
  </Stack>
);
