export const Notify = ({errorMessage} : any) => {

   if (!errorMessage) return null

  return (
    <div style={{color: 'red', position: 'fixed', top: 0, width: '100%', textAlign: 'center'}}>
        {errorMessage}
    </div>
  )
}
