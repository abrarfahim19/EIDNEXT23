import MyMenu from '@ui/Menu';
import Button from '@ui/Button'
import { cx } from "class-variance-authority";

const intents = [undefined, "primary", "secondary", "danger"] as const;
const sizes = [undefined, "medium", "small"] as const;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-raleway">
      <table
        className={cx(
          "relative",
          "h-max w-max",
          "self-center justify-self-center",
          "[&_:where(th,td)]:p-2"
        )}
      >
        <thead>
          <tr>
            <th></th>
            {intents.map((intent) => (
              <th scope="col">{intent || "default"}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizes.map((size) => (
            <tr>
              <th scope="row">{size || "default"}</th>
              {intents.map((intent) => (
                <td scope="col">
                  <Button {...(intent && { intent })} {...(size && { size })}>
                    {intent || "default"} button
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <MyMenu/>
      <h1 className='text-h1'>Body Font : Raleway</h1>
      <h1 className='font-kaushan text-h1'>Cursive Font : Kaushan</h1>
    </main>
  )
}
