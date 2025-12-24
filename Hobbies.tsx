import { ChefHat, Plane, Camera, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const hobbies = [
  {
    icon: ChefHat,
    title: 'Memasak',
    description: 'Suka bereksperimen dengan resep baru dan menciptakan hidangan lezat untuk keluarga.',
    image: 'https://images.unsplash.com/photo-1672056778226-f2b5d13fe159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc2MzcwNDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-orange-500 to-red-500',
    emoji: '🍳'
  },
  {
    icon: Plane,
    title: 'Traveling',
    description: 'Menjelajahi tempat baru dan mengabadikan momen-momen indah di setiap perjalanan.',
    image: 'https://images.unsplash.com/photo-1553053473-2e0089556b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBiYWNrcGFja3xlbnwxfHx8fDE3NjM3NDUwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500 to-cyan-500',
    emoji: '✈️'
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Menangkap keindahan dunia melalui lensa kamera dan bermain dengan komposisi cahaya.',
    image: 'https://images.unsplash.com/photo-1622319977720-9949ac28adc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYXxlbnwxfHx8fDE3NjM2MjI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-pink-500',
    emoji: '📷'
  },
  {
    icon: BookOpen,
    title: 'Belajar',
    description: 'Passionate tentang ilmu pengetahuan dan selalu ingin belajar hal-hal baru setiap hari.',
    image: 'https://images.unsplash.com/photo-1755275402110-9e8eb8592814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB3b3Jrc3BhY2UlMjBzdHVkeXxlbnwxfHx8fDE3NjM3NDUwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-500 to-emerald-500',
    emoji: '📚'
  }
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">
            Hobi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Saya</span>
          </h2>
          <p className="text-gray-600">Hal-hal yang saya sukai dan tekuni 💫</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${hobby.color} opacity-60`}></div>
                  <div className="absolute top-4 right-4 text-4xl">{hobby.emoji}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${hobby.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl">{hobby.title}</h3>
                  </div>
                  <p className="text-gray-600">{hobby.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
