import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-neutral-800 border">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-r border-neutral-800"
        />
      </div>
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-neutral-950">
          <h3 className="text-orange-300 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-neutral-600" />
            <p className="text-lg text-neutral-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-neutral-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-neutral-200">/ night</span>
          </p>
        </div>

        <div className="bg-neutral-950 border-t border-t-neutral-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-neutral-800 py-4 px-6 inline-block hover:bg-orange-400 transition-all hover:text-neutral-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
