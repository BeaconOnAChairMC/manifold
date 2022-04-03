import clsx from 'clsx'
import { BottomNavBar } from './nav/nav-bar'
import Sidebar from './nav/sidebar'

export function Page(props: {
  margin?: boolean
  assertUser?: 'signed-in' | 'signed-out'
  rightSidebar?: React.ReactNode
  children?: any
}) {
  const { margin, assertUser, children, rightSidebar } = props

  return (
    <div>
      <div
        className={clsx(
          'mx-auto w-full pb-16 pt-6 lg:grid lg:grid-cols-12 lg:gap-8 xl:max-w-7xl',
          margin && 'px-4'
        )}
      >
        <div className="hidden lg:col-span-2 lg:block">
          {assertUser !== 'signed-out' && <Sidebar />}
        </div>
        <main
          className={clsx(
            'lg:col-span-8',
            rightSidebar ? 'xl:col-span-7' : 'xl:col-span-8'
          )}
        >
          {children}

          {/* If right sidebar is hidden, place its content at the bottom of the page. */}
          <div className="block xl:hidden">{rightSidebar}</div>
        </main>
        <aside className="hidden xl:col-span-3 xl:block">
          <div className="sticky space-y-4">{rightSidebar}</div>
        </aside>
      </div>

      <BottomNavBar />
    </div>
  )
}
