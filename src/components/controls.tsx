export default function Controls() {
  return (
    <>
      <div id="start_stop">start/stop</div>
      <button id="reset"onClick={()=>{window.location.reload()}}>reset</button>
    </>
  );
}
