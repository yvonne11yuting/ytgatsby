import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderStyle, HeaderContent, HeaderList, HeaderItem } from "./Header.style"

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <HeaderContent>
      <h1>
        <Link to="/">{ siteTitle }</Link>
      </h1>
      <HeaderList>
        <HeaderItem><Link to="/profile">profile</Link></HeaderItem>
        <HeaderItem><Link to="/blog">blog</Link></HeaderItem>
      </HeaderList>
    </HeaderContent>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
