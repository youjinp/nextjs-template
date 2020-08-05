const Test = () => {
  function a() {
    console.log('A')
  }
  a()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>Test page</h1>
    </div>
  )
}

export default Test
