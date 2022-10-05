function ContactsList() {
  return(
    <div className="p-4">
      <div class="flex space-x-2 justify-between py-2">
        <h1 className="text-xl font-semibold pb-4">Contacts</h1>
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