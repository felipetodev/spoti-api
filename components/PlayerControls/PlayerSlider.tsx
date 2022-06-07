import React, { useEffect, useRef, useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useTransform,
} from "framer-motion";

const min = 0;
const max = 100;
const handleSize = 12;

const PlayerSlider: React.FC<any> = () => {
  const [value, setValue] = useState(0);
  const constraintsRef = useRef<any>();
  const handleRef = useRef<any>();
  const progressBarRef = useRef<any>();
  const handleX = useMotionValue(0);
  const progress = useTransform(handleX, (v) => v + handleSize / 2);
  const background: any = useMotionTemplate`linear-gradient(90deg, #1db954 ${progress}px, hsla(0,0%,100%,0.3) 0)`;

  const handleDrag = () => {
    const handleBounds = handleRef.current?.getBoundingClientRect();
    const middleOfHandle = handleBounds?.x + handleBounds?.width / 2;
    const progressBarBounds = progressBarRef.current?.getBoundingClientRect();
    const newProgress =
      (middleOfHandle - progressBarBounds.x) / progressBarBounds.width;

    setValue(newProgress * (max - min));
  };

  useEffect(() => {
    const newProgress = value / (max - min);
    const progressBarBounds = progressBarRef.current?.getBoundingClientRect();
    handleX.set(newProgress * progressBarBounds.width);
  }, [handleX, value]);

  return (
    <Stack margin="0px !important">
      <Stack
        data-test="slider"
        position="relative"
        w={380}
        direction="column"
        justifyContent="center"
        margin="0px !important"
      >
        <Box
          as={motion.div}
          data-test="slider-background"
          position="absolute"
          w="full"
          h={1}
          rounded="full"
          style={{
            background,
          }}
        />
        <Box
          ref={progressBarRef}
          data-test="slider-progress"
          position="absolute"
          h={1}
          margin="0px !important"
          style={{
            left: handleSize / 2,
            right: handleSize / 2,
          }}
        />
        <Stack
          ref={constraintsRef}
          direction="row"
          alignItems="center"
          margin="0px !important"
        >
          <Box
            as={motion.div}
            ref={handleRef}
            data-test="slider-handle"
            position="relative"
            bg="#fff"
            rounded="full"
            drag="x"
            dragMomentum={false}
            dragConstraints={constraintsRef}
            dragElastic={0}
            onDrag={handleDrag}
            style={{
              width: handleSize,
              height: handleSize,
              x: handleX,
            }}
          />
          {/* <Box
            data-test="slider-clickable-area"
            position="absolute"
            w="full"
            h={4}
            border="1px solid green"
            margin="0px !important"
          /> */}
        </Stack>
      </Stack>
      {/* <span>{value}</span> */}
    </Stack>
  );
};

export default PlayerSlider;
