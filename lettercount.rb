# 入力した英文の中で、重複した文字の数が最も多い単語を抽出する
# 条件１）重複文字数が複数の単語で同数の場合、より先頭に近い単語を抽出
# 条件２）重複が無い場合は、「-1」を出力
def LetterCountI(str)
  # デフォルト値
  count = 0
  word = "-1"
  repeated_defalt_count = 0

  # 単語毎に分割する
  word_array = str.split(" ")

  word_array.each do |words|
    # 単語を各文字に分割する
    letters_array = words.split("")
    # 重複している文字のみ抽出
    repeated = letters_array.select{|a| letters_array.index(a)!=letters_array.rindex(a)}.uniq
    # 重複した文字をカウント
    repeated_count = repeated.length
    # 重複文字が、デフォルト<抽出した数の場合、以下を実行
    if repeated_defalt_count < repeated_count
      countNew = 0
      while repeated_defalt_count < repeated_count
        repeated_count -= 1
        countNew += 1
      end
      if countNew > count
        count = countNew
        word = words
      end
    end
  end

  puts "条件１）文字が最も重複した単語を出力（最大重複が同じ場合、より先頭の単語）"
  puts "条件２）重複した文字を含む単語がない場合は「-1」"
  puts word
end

puts "英文を入力して下さい"
puts LetterCountI(STDIN.gets)
