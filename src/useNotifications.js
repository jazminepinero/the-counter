import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'


export default function useNotifications() {
  const dispatch = useDispatch()
  return useMemo(() => {
    return bindActionCreators(dispatch)
  }, [dispatch])
};