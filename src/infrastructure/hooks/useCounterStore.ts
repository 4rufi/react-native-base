import { useSelector } from 'react-redux';
import { AppStore } from '../../domain/store/store';

const useCounterStoreSelector = () => {
  const counter = useSelector((state: AppStore) => state.counter);

  return counter;
};

export default useCounterStoreSelector;
