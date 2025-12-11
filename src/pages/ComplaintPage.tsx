import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

interface FormField {
  label: 'name' | 'email' | 'subject' | 'description';
  id: string;
  type: string;
  placeholder: string;
}

const schema = z.object({
  name: z
    .string()
    .min(5, 'name cannot be less than 5 characters.')
    .max(20, 'name cannot not exceed 20 characters.'),
  email: z
    .email('please enter a valid email address')
    .min(10)
    .max(40, 'email cannot not exceed 40 characters.'),
  subject: z
    .string()
    .min(10, 'subject must be at least 10 characters.')
    .max(40, 'subject cannot exceed 40 characters'),
  description: z
    .string()
    .min(20, 'description is too short.')
    .max(500, 'description cannot exceed 500 characters'),
});

type ComplaintFormData = z.infer<typeof schema>;

const ComplaintPage = () => {
  const [error, setError] = useState('');
  const [isPosting, setPosting] = useState(false);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ComplaintFormData>({ resolver: zodResolver(schema) });
  const formFields: FormField[] = [
    {
      label: 'name',
      id: 'name',
      type: 'text',
      placeholder: 'your name',
    },
    {
      label: 'email',
      id: 'email',
      type: 'email',
      placeholder: 'johndoe@gmail.com',
    },
    {
      label: 'subject',
      id: 'subject',
      type: 'text',
      placeholder: 'short title of the complaint',
    },
    {
      label: 'description',
      id: 'description',
      type: 'text',
      placeholder: 'type your complaint here...',
    },
  ];

  return (
    <div className="px-4 max-w-[1024px] mx-auto">
      {error && (
        <div className="max-w-[1140px] mx-auto px-4 mb-5 p-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
            {error}
          </div>
        </div>
      )}
      <div className="py-10 grid gap-10 max-w-[1024px] mx-auto md:grid-cols-2">
        <div>
          <h1 className="text-2xl font-semibold mb-5 md:text-4xl">
            Lay a Complaint
          </h1>
          <p className="text-gray-600">
            We're here to help. If you experienced an issue or would like to
            report a concern, please provide the details.
          </p>
        </div>
        <form
          className="shadow border rounded-2xl p-3 max-w-lg w-full"
          noValidate
          onSubmit={handleSubmit((data) => {
            setPosting(true);
            const loggedData = {
              ...data,
            };
            axios
              .post(
                'https://lpress-backend-y1jn.onrender.com/api/v1/complaints',
                loggedData
              )
              .then(() => {
                setPosting(false);
                toast('Your complaint has been submitted.');
              })
              .catch((err: AxiosError) => {
                setPosting(false);
                setError(err.message);
              });
            reset();
          })}
        >
          {formFields.map((field) =>
            field.label === 'description' ? (
              <div key={field.id} className="mb-5">
                <textarea
                  rows={9}
                  {...register(field.label)}
                  className="border w-full rounded-sm px-3 py-2 outline-0 focus:ring-1 focus:ring-green-950 hover:shadow-sm"
                  id="complaint"
                  placeholder="Type something here..."
                ></textarea>
                {errors[field.label] && (
                  <p className="text-red-700 text-xs">
                    {errors[field.label]?.message}
                  </p>
                )}
              </div>
            ) : (
              <div key={field.id} className="mb-3">
                <label
                  htmlFor={field.id}
                  className="block text-sm text-gray-800 mb-1 capitalize"
                >
                  {field.label}
                </label>{' '}
                <input
                  autoFocus={field.label === 'name' && true}
                  {...register(field.label)}
                  className="border placeholder:text-sm px-3 py-1 rounded-sm outline-0 focus:ring-1 focus:ring-green-950 hover:shadow-sm transition-all duration-300 w-full"
                  type={field.type}
                  placeholder={field.placeholder}
                />
                {errors[field.label] && (
                  <p className="text-red-700 text-xs">
                    {errors[field.label]?.message}
                  </p>
                )}
              </div>
            )
          )}
          <button
            type="submit"
            className={`btn border-0 bg-green-800 text-white hover:bg-green-950 ${
              isPosting && 'bg-green-800/50'
            }`}
            disabled={isPosting}
          >
            {isPosting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintPage;
