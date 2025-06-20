
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      business: "Consultor Independiente",
      text: "María me ayudó a organizarme con el monotributo y las declaraciones juradas. Su profesionalismo y cercanía me dieron la tranquilidad que necesitaba para enfocarme en mi negocio.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      business: "Dueña de Boutique",
      text: "Desde que trabajo con María, no me preocupo más por los temas contables. Siempre está disponible para resolver mis dudas y me mantiene al día con todas las obligaciones fiscales.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      business: "Director de Pyme Familiar",
      text: "Excelente profesional. Nos asesoró en la optimización tributaria de nuestra empresa familiar y nos ahorró mucho dinero. Totalmente recomendable por su seriedad y conocimiento.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-lg text-gray-600">
            La confianza de mis clientes es mi mejor carta de presentación
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
