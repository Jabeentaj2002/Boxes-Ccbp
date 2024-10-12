const Box = props => {
  //  Write your code here.
  const {className, boxText} = props
  return <div className={`${className}`}>{boxText}</div>
}

const element = (
  //  Write your code here.
  <div className='boxContainer'>
    <h1>Boxes</h1>
    <div className='boxes-container'>
      <Box boxText='Small' className='small-box box' />
      <Box boxText='Medium' className='medium-box box' />
      <Box boxText='Large' className='large-box box' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
