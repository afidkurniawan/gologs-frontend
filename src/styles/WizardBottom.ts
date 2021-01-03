import styled from "styled-components/macro";

export const Container = styled.div`
  height: 420px;
  background: #ffffff;
  border-radius: 20px;
  width: 103%;
`;

export const CircleOuter = styled("div")<{ active?: boolean; show?: boolean }>`
  background: ${props => (props.active ? "#7456FD" : "#EFF0F6")};
  margin-left: ${props => (props.show ? "40%" : "")};
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-content: center;
  display: flex;
  width: 26px;
  height: 26px;
`;

export const CircleInner = styled("div")<{ active?: boolean; show?: boolean }>`
  background: ${props => (props.active ? "#7456FD" : "#EFF0F6")};
  margin-left: ${props => (props.show ? "40%" : "")};
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-content: center;
  display: flex;
  width: 12px;
  height: 12px;
`;

export const Rectangle = styled("div")<{ show?: boolean }>`
  background-color: ${props => (props.show ? "#EFF0F6" : "#FFFFFF")};
  height: 6px;
  width: 50%;
`;