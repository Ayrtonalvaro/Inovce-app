import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"
import MarkPiadButton from "./MarkPiadButton"
import Status from "./Status"

interface HeaderInvocePros {
  status: string
}

const HeaderInvoce:React.FC<HeaderInvocePros> = ({status}) => {
  return (
    <div className="text-white flex justify-between items-center bg-ligthBlue px-5 py-7 mt-5 rounded-md">
      <div className="flex gap-5">
        <h3 className="text-xl text-slate-400 font-semibold">status</h3>
        <Status status={status} />
      </div>
      <div className="flex gap-5">
        <div className="flex gap-5 items-center">
          <EditButton />
          <DeleteButton />
          <MarkPiadButton />
        </div>
      </div>
    </div>
  )
}

export default HeaderInvoce
