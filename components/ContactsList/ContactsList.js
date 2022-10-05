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