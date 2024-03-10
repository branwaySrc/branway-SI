import { HTMLAttributes } from "react";

type ClassName = string;
type TagAttributes<T> = Omit<HTMLAttributes<T>, "className"> & {
  className?: string;
  breakClass?: {
    lg?: ClassName;
    sm?: ClassName;
  };
};

export const Inner: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={`max-w-screen-xl min-w-screen-sm mx-auto text-slate-200 ${className}`}
      {...otherProps}
    />
  );
};

export const Section: React.FC<TagAttributes<HTMLDivElement>> = (props) => {
  const { className, breakClass, ...otherProps } = props;
  return (
    <section
      className={`${className} ${breakClass?.sm} ${breakClass?.lg}`}
      {...otherProps}
    />
  );
};

export const Container: React.FC<TagAttributes<HTMLDivElement>> = (props) => {
  const { className, breakClass, ...otherProps } = props;
  return (
    <div
      className={`${className} ${breakClass?.sm} ${breakClass?.lg}`}
      {...otherProps}
    />
  );
};

export const Box: React.FC<TagAttributes<HTMLDivElement>> = (props) => {
  const { className, breakClass, ...otherProps } = props;
  return (
    <div
      className={`${className} ${breakClass?.sm} ${breakClass?.lg}`}
      {...otherProps}
    />
  );
};

export const Button: React.FC<TagAttributes<HTMLButtonElement>> = (props) => {
  const { className, breakClass, ...otherProps } = props;
  return (
    <button
      className={`${className} ${breakClass?.sm} ${breakClass?.lg}`}
      {...otherProps}
    />
  );
};

export const AbsoluteBg: React.FC<TagAttributes<HTMLDivElement>> = (props) => {
  const { className, breakClass, ...otherProps } = props;
  return (
    <figure
      className={`${className} ${breakClass?.sm} ${breakClass?.lg}`}
      {...otherProps}
    />
  );
};

export const Text: React.FC<TagAttributes<HTMLDivElement>> = (props) => {
  const { className, breakClass, ...otherProps } = props;
  return (
    <p
      className={`${className} ${breakClass?.sm} ${breakClass?.lg}`}
      {...otherProps}
    />
  );
};

export const Title: React.FC<TagAttributes<HTMLDivElement>> = (props) => {
  const { className, breakClass, ...otherProps } = props;
  return (
    <h1
      className={`${className} ${breakClass?.sm} ${breakClass?.lg}`}
      {...otherProps}
    />
  );
};

export const Figure: React.FC<TagAttributes<HTMLDivElement>> = (props) => {
  const { className, breakClass, ...otherProps } = props;
  return (
    <figure
      className={`${className} ${breakClass?.sm} ${breakClass?.lg}`}
      {...otherProps}
    />
  );
};

export const Line: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={`max-w-screen-xl min-w-screen-sm mx-auto text-slate-200 ${className}`}
      {...otherProps}
    />
  );
};
