const logger = store => next => action => {
  console.groupCollapsed(`[Dispatch] ${action.type}`);
  console.log(action);
  console.groupCollapsed('Callstack');
  console.log('Callstack', new Error().stack);
  console.groupEnd();
  console.groupEnd();
  return next(action);
};

export default logger;
