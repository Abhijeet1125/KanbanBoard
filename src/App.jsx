import { useEffect, useState } from 'react'
import data_loader from './api'
import { useSelector, useDispatch } from 'react-redux';
import { put_data, put_groupBy, put_sortBy, put_todisplay } from './store/dataSlice';
import { Dropdown, CardContainer } from './components'
import groupAndSortTickets from './grouping_sorting';



function App() {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.data.data)
  const groupby = useSelector((state) => state.data.groupBy)
  const sortby = useSelector((state) => state.data.sortBy)
  const to_display = useSelector((state) => state.data.to_display)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const callfun = async () => {
      try {
        const data = await data_loader()
        dispatch(put_data(data))
        const group = localStorage.getItem("group")
        const sort = localStorage.getItem ("sort")
        if ( group ) {dispatch ( put_groupBy (group))}
        else { dispatch (  put_groupBy ("status"))}
        if ( sort ) {dispatch ( put_sortBy(sort))}
        else { dispatch ( put_sortBy ( "priority"))}
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    callfun()
  }, [])


  useEffect(() => {
    if (!loading) {
      const response = groupAndSortTickets(groupby, sortby, data.tickets, data.users)
      dispatch(put_todisplay(response))
    }
  }, [groupby, sortby, loading])




  return (
    <>
      { (!loading) && <Dropdown/> }
      <div className="card-container-wrapper">
        {to_display.map((item, index) => (
          <CardContainer key={index} data={item.data} headerData={item.headerData} />
        ))}
      </div>

    </>
  )
}

export default App
