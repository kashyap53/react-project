import React from "react";

const Header = () => {
    return(
        <nav className="header">
        <div className="header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden">
          <div className="flex w-full items-center justify-between">
            <div className="h-7 w-7">
              <button
                className="menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80 $store.global.isSidebarExpanded && 'active'">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <div className="-mr-1.5 flex items-center space-x-2">
              <button
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
                <div
                  className="flex">
                  <div className="relative mr-4 flex h-8">
                  <input placeholder="Search here..." class="form-input peer h-full rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900 w-80" />
                    <div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary ">
                      
                    </div>
                  </div>
                  <div className="isShowPopper">
                    <div className="popper-box flex max-h-[calc(100vh-6rem)] w-80 flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark"
                    >
                      <div className="is-scrollbar-hidden flex shrink-0 overflow-x-auto rounded-t-lg bg-slate-100 px-2 text-slate-600 dark:bg-navy-800 dark:text-navy-200"
                      >
                        <button className="activeTab === 'tabAll' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          All
                        </button>
                        <button className="activeTab === 'tabFiles' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          Files
                        </button>
                        <button  className="activeTab === 'tabChats' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          Chats
                        </button>
                        <button className="activeTab === 'tabEmails' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          Emails
                        </button>
                        <button className="activeTab === 'tabProjects' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          Projects
                        </button>
                        <button className="activeTab === 'tabTasks' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          Tasks
                        </button>
                      </div>

                      <div
                        className="is-scrollbar-hidden overflow-y-auto overscroll-contain pb-2"
                      >
                        <div
                          className="is-scrollbar-hidden mt-3 flex space-x-4 overflow-x-auto px-3"
                        >
                          <a href="apps-kanban.html" className="w-14 text-center">
                            <div className="avatar h-12 w-12">
                              <div
                                className="is-initial rounded-full bg-success text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                            >
                              Kanban
                            </p>
                          </a>
                          <a
                            href="dashboards-crm-analytics.html"
                            className="w-14 text-center"
                          >
                            <div className="avatar h-12 w-12">
                              <div
                                className="is-initial rounded-full bg-secondary text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                            >
                              Analytics
                            </p>
                          </a>
                          <a href="apps-chat.html" className="w-14 text-center">
                            <div className="avatar h-12 w-12">
                              <div
                                className="is-initial rounded-full bg-info text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                            >
                              Chat
                            </p>
                          </a>
                          <a
                            href="apps-filemanager.html"
                            className="w-14 text-center"
                          >
                            <div className="avatar h-12 w-12">
                              <div
                                className="is-initial rounded-full bg-error text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                            >
                              Files
                            </p>
                          </a>
                          <a
                            href="dashboards-crypto-1.html"
                            className="w-14 text-center"
                          >
                            <div className="avatar h-12 w-12">
                              <div
                                className="is-initial rounded-full bg-secondary text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                            >
                              Crypto
                            </p>
                          </a>
                          <a
                            href="dashboards-banking-1.html"
                            className="w-14 text-center"
                          >
                            <div className="avatar h-12 w-12">
                              <div
                                className="is-initial rounded-full bg-primary text-white dark:bg-accent"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                            >
                              Banking
                            </p>
                          </a>
                          <a href="apps-todo.html" className="w-14 text-center">
                            <div className="avatar h-12 w-12">
                              <div
                                className="is-initial rounded-full bg-info text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    d="M12.5293 18L20.9999 8.40002"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M3 13.2L7.23529 18L17.8235 6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                            >
                              Todo
                            </p>
                          </a>
                          <a
                            href="dashboards-crm-analytics.html"
                            className="w-14 text-center"
                          >
                            <div className="avatar h-12 w-12">
                              <div
                                className="is-initial rounded-full bg-secondary text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                            >
                              Analytics
                            </p>
                          </a>
                          <a
                            href="dashboards-orders.html"
                            className="w-14 text-center"
                          >
                            <div className="avatar h-12 w-12">
                              <div
                                className="is-initial rounded-full bg-warning text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                            >
                              Orders
                            </p>
                          </a>
                        </div>

                        <div
                          className="mt-3 flex items-center justify-between bg-slate-100 py-1.5 px-3 dark:bg-navy-800"
                        >
                          <p className="text-xs uppercase">Recent</p>
                          <a
                            href="#"
                            className="text-tiny+ font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                          >
                            View All
                          </a>
                        </div>

                        <div className="mt-1 font-inter font-medium">
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="apps-chat.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                            <span>Chat App</span>
                          </a>
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="apps-filemanager.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                              />
                            </svg>
                            <span>File Manager App</span>
                          </a>
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="apps-mail.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <span>Email App</span>
                          </a>
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="apps-kanban.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                              />
                            </svg>
                            <span>Kanban Board</span>
                          </a>
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="apps-todo.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                d="M3 13.2L7.23529 18L17.8235 6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M12.5293 18L20.9999 8.40002"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span>Todo App</span>
                          </a>
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="dashboards-crypto-2.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>

                            <span>Crypto Dashboard</span>
                          </a>
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="dashboards-banking-2.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                              />
                            </svg>

                            <span>Banking Dashboard</span>
                          </a>
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="dashboards-crm-analytics.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                              />
                            </svg>

                            <span>Analytics Dashboard</span>
                          </a>
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            href="dashboards-influencer.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>

                            <span>Influencer Dashboard</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              

              <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
               
              </button>

              <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <i
                  className="fa-solid fa-palette bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-lg font-semibold text-transparent"
                ></i>
              </button>

              <div
                x-effect="if($store.global.isSearchbarActive) isShowPopper = false"
                x-data="usePopper({placement:'bottom-end',offset:12})"
                className="flex"
              >
                <button className="btn relative h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-500 dark:text-navy-100" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z"></path>
                  </svg>
                  <span
                    className="absolute -top-px -right-px flex h-3 w-3 items-center justify-center"
                  >
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80"
                    ></span>
                    <span
                      className="inline-flex h-2 w-2 rounded-full bg-secondary"
                    ></span>
                  </span>
                </button>
                <div className="popper-root"
                  x-ref="popperRoot"
                >
                  <div
                    x-data="{activeTab:'tabAll'}"
                    className="popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80"
                  >
                    <div
                      className="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200"
                    >
                      <div className="flex items-center justify-between px-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <h3
                            className="font-medium text-slate-700 dark:text-navy-100"
                          >
                            Notifications
                          </h3>
                          <div
                            className="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light"
                          >
                            26
                          </div>
                        </div>

                        <button
                          className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                          
                        </button>
                      </div>

                      <div
                        className="is-scrollbar-hidden flex shrink-0 overflow-x-auto px-3"
                      >
                        <button className="activeTab === 'tabAll' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          <span>All</span>
                        </button>
                        <button className="activeTab === 'tabAlerts' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          <span>Alerts</span>
                        </button>
                        <button className="activeTab === 'tabEvents' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          <span>Events</span>
                        </button>
                        <button className="activeTab === 'tabLogs' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        >
                          <span>Logs</span>
                        </button>
                      </div>
                    </div>

                    <div className="tab-content flex flex-col overflow-hidden">
                      <div className="is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary-light/15"
                          >
                            <i
                              className="fa fa-user-edit text-secondary dark:text-secondary-light"
                            ></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              User Photo Changed
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              John Doe changed his avatar photo
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Mon, June 14, 2021
                            </p>
                            <div
                              className="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span className="shrink-0">08:00 - 09:00</span>
                              <div
                                className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span className="line-clamp-1">Frontend Conf</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-accent-light/15"
                          >
                            <i
                              className="fa-solid fa-image text-primary dark:text-accent-light"
                            ></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Images Added
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Mores Clarke added new image gallery
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 dark:bg-success/15"
                          >
                            <i className="fa fa-leaf text-success"></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Design Completed
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Robert Nolan completed the design of the CRM
                              application
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Wed, June 21, 2021
                            </p>
                            <div
                              className="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span className="shrink-0">16:00 - 20:00</span>
                              <div
                                className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span className="line-clamp-1">UI/UX Conf</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <i className="fa fa-project-diagram text-warning"></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              ER Diagram
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Team completed the ER diagram app
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-warning"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              THU, May 11, 2021
                            </p>
                            <div
                              className="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span className="shrink-0">10:00 - 11:30</span>
                              <div
                                className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>
                              <span className="line-clamp-1"
                                >Interview, Konnor Guzman
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-error/10 dark:bg-error/15"
                          >
                            <i className="fa fa-history text-error"></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Weekly Report
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              The weekly report was uploaded
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary-light/15"
                          >
                            <i
                              className="fa fa-user-edit text-secondary dark:text-secondary-light"
                            ></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              User Photo Changed
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              John Doe changed his avatar photo
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-accent-light/15"
                          >
                            <i
                              className="fa-solid fa-image text-primary dark:text-accent-light"
                            ></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Images Added
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Mores Clarke added new image gallery
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 dark:bg-success/15"
                          >
                            <i className="fa fa-leaf text-success"></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Design Completed
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Robert Nolan completed the design of the CRM
                              application
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <i className="fa fa-project-diagram text-warning"></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              ER Diagram
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Team completed the ER diagram app
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-error/10 dark:bg-error/15"
                          >
                            <i className="fa fa-history text-error"></i>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Weekly Report
                            </p>
                            <div
                              className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              The weekly report was uploaded
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Mon, June 14, 2021
                            </p>
                            <div
                              className="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span className="shrink-0">08:00 - 09:00</span>
                              <div
                                className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span className="line-clamp-1">Frontend Conf</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Wed, June 21, 2021
                            </p>
                            <div
                              className="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span className="shrink-0">16:00 - 20:00</span>
                              <div
                                className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span className="line-clamp-1">UI/UX Conf</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-warning"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              THU, May 11, 2021
                            </p>
                            <div
                              className="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span className="shrink-0">10:00 - 11:30</span>
                              <div
                                className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>
                              <span className="line-clamp-1"
                                >Interview, Konnor Guzman
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Mon, Jul 16, 2021
                            </p>
                            <div
                              className="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span className="shrink-0">06:00 - 16:00</span>
                              <div
                                className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span className="line-clamp-1">Laravel Conf</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-warning"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              className="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Wed, Jun 16, 2021
                            </p>
                            <div
                              className="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span className="shrink-0">15:30 - 11:30</span>
                              <div
                                className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>
                              <span className="line-clamp-1"
                                >Interview, Jonh Doe
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="is-scrollbar-hidden overflow-y-auto px-4"
                      >
                        <div className="mt-8 pb-8 text-center">
                          <img
                            className="mx-auto w-36"
                            src="images/illustrations/empty-girl-box.svg"
                            alt="image"
                          />
                          <div className="mt-5">
                            <p
                              className="text-base font-semibold text-slate-700 dark:text-navy-100"
                            >
                              No any logs
                            </p>
                            <p className="text-slate-400 dark:text-navy-300">
                              There are no unread logs yet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
              <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          </div>
      </nav>
    );
};

export default Header;

