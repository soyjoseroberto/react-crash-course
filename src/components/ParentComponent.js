import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
    const greetParentFunc = (childName) => {
        alert(`Hello in parent: ${childName} arg from child`);
    }
    return (
        <ChildComponent greetHandler={greetParentFunc} />
    )
}