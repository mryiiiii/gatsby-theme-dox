/** @jsx jsx */
import { useCallback, useMemo, useState } from 'react'
import { jsx } from 'theme-ui'
import SidebarContent from '../../sidebar.mdx'
import Branding from './Branding'
import Item, { isItemActive } from './Item'
import { getActiveItem, getActiveItemParentLinks, getItems } from './utils'

const setOpenItems = (state, items) => {
  for (const item of items) {
    if (item.items) {
      state.openItems[item.link] =
        isItemActive(state.activeItemParentLinks, item) ||
        state.activeItem.link === item.link

      setOpenItems(state, item.items)
    }
  }
}

function Sidebar({ children, sidebar, open = true, location }) {
  const items = useMemo(() => getItems(children), [children])

  const [{ openItems, activeItem, activeItemParentLinks }, setState] = useState(
    () => {
      const activeItem = getActiveItem(items, location)

      const state = {
        openItems: {},
        activeItem,
        activeItemParentLinks: getActiveItemParentLinks(items, activeItem, [])
      }

      setOpenItems(state, items)

      return state
    }
  )

  const toggleItem = useCallback(item => {
    setState(state => ({
      ...state,
      openItems: {
        ...state.openItems,
        [item.link]: !state.openItems[item.link]
      }
    }))
  }, [])

  return (
    <section
      id="__sidebar"
      key="sidebar"
      ref={sidebar}
      aria-expanded={open}
      tabIndex="-1"
      className={open ? 'active' : ''}
      sx={{ variant: 'layout.sidebar', zIndex: 99 }}
    >
      <Branding />

      <nav
        aria-label="Navigation Menu"
        sx={{
          variant: 'layout.container',
          px: 0,
          ul: { listStyle: 'none', m: 0, p: 0 }
        }}
      >
        <ul sx={{ ul: { pl: '1.5em' } }}>
          {items.map(item => (
            <Item
              key={item.link}
              item={item}
              location={location}
              openItems={openItems}
              activeItem={activeItem}
              activeItemParentLinks={activeItemParentLinks}
              toggleItem={toggleItem}
            />
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default props => (
  <SidebarContent
    {...props}
    components={{
      wrapper: Sidebar
    }}
  />
)
