function ContactsList() {
  return(
    <div className="p-4">
      <h1 className="text-xl font-semibold pb-4">Contacts</h1>

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
                            Deal worth
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Percentage
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
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  );
}

export default ContactsList;