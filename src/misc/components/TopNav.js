import {h} from 'preact';

const TopNav = ({ title }) => (
  h('nav', {class: 'horizontal-centered'},
    h('button', {class: "shake"}, "🍔"),
    h('p',
      h('i', 'Good'),
      h('strong', 'Habits'),
      title && `: ${title}`,
    ),
    h('a', {href: '/auth/logout', class: 'logout'}, 'logout')
  )
);

export default TopNav;
