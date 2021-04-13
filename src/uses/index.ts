import { getCurrentInstance } from 'vue';

function useExpose<T>(extra: T) {
  const instance = getCurrentInstance();
  console.log(instance);
  if (instance) {
    Object.assign(instance.proxy, extra)
  }
}

export { useExpose };