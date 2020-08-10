Post.destroy_all
Comment.destroy_all

50.times do
    created_at = Faker::Date.backward(365)
    p = Post.create(
        title: Faker::Lorem.sentence(5, true, 5),
        body: Faker::Lorem.paragraph(5, true, 5),
        created_at: created_at,
        updated_at: created_at
    )

    if p.valid?
        rand(0..10).times do
            p.comments << Comment.new(
                body: Faker::GreekPhilosophers.quote,
            )
        end
    end
end

posts = Post.all
comments = Comment.all

puts Cowsay.say("Generated #{posts.count} posts", :frog) 
puts Cowsay.say("Generated #{posts.count} posts", :frog)
puts Cowsay.say("Generated #{comments.count} comments", :frog) 
