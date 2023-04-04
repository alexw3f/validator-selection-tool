import { results$ } from "@/state"
import { Subscribe } from "@react-rxjs/core"
import { map } from "rxjs"
import { Loading } from "./Loading"
import { AccountIcon } from "@/Components/AccountIcon"

const jsxResults$ = results$.pipeState(
  map((x) =>
    Array.isArray(x) ? (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4 ">
        {x.map((result) => (
          <div
            key={result}
            className="flex p-2 border-[1px] rounded-md justify-center"
          >
            <AccountIcon small address={result} />
          </div>
        ))}
      </div>
    ) : (
      <span className="text-body-2 text-gray-300">
        Not enough confidence to show results. Keep going!
      </span>
    ),
  ),
)

export const Results: React.FC = () => {
  return <Subscribe fallback={<Loading size={30} />}>{jsxResults$}</Subscribe>
}
