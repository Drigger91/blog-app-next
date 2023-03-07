import { FunctionComponent , FC } from "react";

type Props = {
    params : {name : string , dynamic : string}
}

function page({params}: Props) {
  return (
    <div>dynamic route in ts : {params.dynamic}</div>
  )
}

export default page