export default function evalFunction(value) {
    let result;
    const originalLog = console.log;
    console.log = (output) => {
      result = output;
    };
    const fn = new Function(value);
    fn();
    console.log = originalLog;
    console.log(result);
    return result;
  };