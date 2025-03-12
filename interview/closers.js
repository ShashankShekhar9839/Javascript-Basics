// ** Closures are functions that have access to the variables that are present in their scope chain even if the outer function ceases to exist. To understand this in more detail, let's understand what a scope chain is. Scope chain refers to the fact that parent scope does not have access to the variables inside its children's scope, but the children's scope does have access to the variables present in its parent scopes.  **//

let buttonProps = (borderRadius) => {
  const createVariantButtonProps = (variant, color) => {
    const newProps = {
      borderRadius,
      variant,
      color,
    };
    return newProps;
  };
  return createVariantButtonProps;
};

let primaryButton = buttonProps("1rem");
const primaryButtonProps = primaryButton("primary", "red");
console.log(primaryButtonProps);
