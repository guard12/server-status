import React, { useState } from 'react'

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

import { ServerCardWrapper, ServerCardItem, ServerCardAvatar, ServerCardInfo } from '../styles/server-card'

export function ServerCard() {
	return <motion.div>
		<ServerCardWrapper layout initial={{ borderRadius: 25 }}>
			{items.map(item => (
				<Item key={item} />
			))}
		</ServerCardWrapper>
	</motion.div>
}

function Item() {
	const [isOpen, setIsOpen] = useState(false)
  
	const toggleOpen = () => setIsOpen(!isOpen)
  
	return <ServerCardItem layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
		<ServerCardAvatar>Server One</ServerCardAvatar>
		<AnimatePresence>{isOpen && <Content />}</AnimatePresence>
	</ServerCardItem>
  }

  function Content() {
	return <motion.div
		layout
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
	>
		<ServerCardInfo />
		<ServerCardInfo />
		<ServerCardInfo />
	</motion.div>
  }
  
  const items = [0, 1, 2]

