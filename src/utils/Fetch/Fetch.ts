type MethodChoice = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH'

/**
 * FetchOperator takes main link.
 * param {'gift' | 'child'} [mainLink]
 */
export class FetchOperator {

    private readonly URL_API = "http://localhost:3001/"
    private readonly mainLink: string;

    constructor(link: string) {
        this.mainLink = link
    }

    /**
     * @private
     * @param {'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH'} [method] - {'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH'}
     * @param {string | undefined} [id] - id element {string | undefined}
     * @param {object | null} [form] - form {object | null}
     */
    async run(method: MethodChoice = 'GET', id: string | undefined = '', form: object | null = null): Promise<any> {
        if (method === 'DELETE' && !window.confirm(`Are you sure you want to remove ${id}?`)) {
            return null;
        }

        let init = {method: method}

        if (form !== null) {
            init = {
                ...init,
                ...{
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",
                    body: JSON.stringify(form),
                }
            }
        }

        const res = await fetch(`${this.URL_API}${this.mainLink}/${id}`, init)

        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occurred: ${error.message}`)
            return null;
        }

        const data = res.json()

        return await data
    }

    async pdf(name: string): Promise<any> {
        return await fetch(`${this.URL_API}${this.mainLink}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
            .then((res) => res.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    name,
                );
                document.body.appendChild(link);
                link.click();
            })
    }

}

/**
 * Przykładowe użycie dla POST:
 *
 * const data = await new FetchOperator('gift')
 * const dataRes = await data.run('POST','', form)
 *
 */