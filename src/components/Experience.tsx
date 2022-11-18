
export function Experience(props) {
    return (
        <li class="mb-8">
            <h2 class="text-lg font-medium text-gray-800">{ props.current.company } <small class="text-sm text-gray-600"> ({`${props.current.date[0]} - ${props.current.date[1]}`})</small></h2>
            {
                props.current.content && props.current.content.map(item => {
                    return (<div class="mt-1">
                            <div>
                                <h3 class="text-base font-medium text-gray-800">{item.project}</h3>
                                {
                                    item.detail && item.detail.map(nav => (<p class="text-sm text-gray-600">{nav}</p >))
                                }
                            </div>
                    </div>)
                })
            }
        </li>
    );
  }
  