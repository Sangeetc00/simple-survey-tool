interface SurveyHeaderProps {
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
  }
  
  export function SurveyHeader({ title, setTitle, description, setDescription }: SurveyHeaderProps) {
    return (
      <>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Survey Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2"
            placeholder="Enter survey title"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Survey Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2"
            placeholder="Enter survey description"
            rows={4}
            required
          />
        </div>
      </>
    );
  }