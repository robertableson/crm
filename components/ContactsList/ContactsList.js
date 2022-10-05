function ContactsList() {
  return(
    <div className="p-4">
        <h1 className="text-xl font-semibold pb-4">Contacts</h1>

      <div class="flex space-x-2 justify-between py-2">
        <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span class="sr-only">Action button</span>
                Action
                <svg class="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div id="dropdownAction" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>

        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>

        <div>
          <button type="button" class="inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-slate-800 hover:shadow-lg focus:bg-slate-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-900 active:shadow-lg transition duration-150 ease-in-out">Add new</button>
        </div>

      </div>

        <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-slate-500">
                <thead class="text-xs text-slate-700 uppercase bg-slate-100">
                    <tr>
                        <th scope="col" class="p-4">
                          <div class="flex items-center">
                              <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label for="checkbox-all-search" class="sr-only">checkbox</label>
                          </div>
                      </th>
                        <th scope="col" class="py-3 px-6">
                            Business
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Contact
                        </th>
                        <th scope="col" class="py-3 px-6">
                            LTV
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Win chance
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Action
                      </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b">
                        <td class="p-4 w-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="py-4 px-6 font-medium text-slate-700 whitespace-nowrap">
                            Apple
                        </th>
                        <td class="py-4 px-6">
                            Steve
                        </td>
                        <td class="py-4 px-6">
                            100,000$
                        </td>
                        <td class="py-4 px-6">
                            80%
                        </td>
                        <td class="py-4 px-6">
                          <a href="#" class="font-medium text-slate-500 underline hover:underline">Edit</a>
                      </td>
                    </tr>
                    <tr class="bg-gray-50 border-b">
                        <td class="p-4 w-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="py-4 px-6 font-medium text-slate-700 whitespace-nowrap">
                            Apple
                        </th>
                        <td class="py-4 px-6">
                            Steve
                        </td>
                        <td class="py-4 px-6">
                            100,000$
                        </td>
                        <td class="py-4 px-6">
                            80%
                        </td>
                        <td class="py-4 px-6">
                          <a href="#" class="font-medium text-slate-500 underline hover:underline">Edit</a>
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  );
}

export default ContactsList;